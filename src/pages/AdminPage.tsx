import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import {
  LayoutDashboard,
  Users,
  Briefcase,
  Layers,
  Settings,
  FolderOpen,
  LogOut,
  Plus,
  Edit,
  Trash2,
  Lock,
  Mail,
  ChevronRight,
  TrendingUp,
  Globe,
  DollarSign,
  FileText,
  Search,
  Upload,
  BookOpen,
  HelpCircle,
  MessageSquare,
  Key,
} from 'lucide-react';

interface AdminPageProps {
  onNavigate: (page: PageId) => void;
}

type TabId =
  | 'dashboard'
  | 'blogs'
  | 'careers'
  | 'media'
  | 'settings';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'Super Admin' | 'Admin' | 'Sales' | 'HR' | 'Content Manager' | 'Marketing';
}

export const AdminPage: React.FC<AdminPageProps> = ({ onNavigate }) => {
  // Authentication states
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string>('');
  
  // Login form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  // Navigation tab
  const [activeTab, setActiveTab] = useState<TabId>('dashboard');

  // Change Password state
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState('');
  
  // Data lists & loading states
  const [dashboardStats, setDashboardStats] = useState<any>(null);
  const [statsLoading, setStatsLoading] = useState(false);
  
  const [itemsList, setItemsList] = useState<any[]>([]);
  const [itemsLoading, setItemsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Media manager states
  const [mediaList, setMediaList] = useState<any[]>([]);
  const [mediaLoading, setMediaLoading] = useState(false);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState('general');
  const [mediaSearch, setMediaSearch] = useState('');

  // Settings states
  const [settings, setSettings] = useState<any>(null);
  const [settingsLoading, setSettingsLoading] = useState(false);
  const [settingsSuccess, setSettingsSuccess] = useState(false);

  // Form modal states
  const [showFormModal, setShowFormModal] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [formData, setFormData] = useState<Record<string, any>>({});

  // Check existing session on load
  useEffect(() => {
    const storedToken = localStorage.getItem('synckraft_admin_token') || sessionStorage.getItem('synckraft_admin_token');
    if (storedToken) {
      verifyToken(storedToken);
    }
  }, []);

  const verifyToken = async (authToken: string) => {
    try {
      const res = await fetch('/api/auth/session', {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      const json = await res.json();
      if (json.success) {
        setIsAuthenticated(true);
        setUser(json.data.user);
        setToken(authToken);
      } else {
        handleLogoutAction();
      }
    } catch {
      handleLogoutAction();
    }
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setLoginLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, rememberMe }),
      });
      const json = await res.json();

      if (json.success) {
        const authToken = json.data.token;
        if (rememberMe) {
          localStorage.setItem('synckraft_admin_token', authToken);
        } else {
          sessionStorage.setItem('synckraft_admin_token', authToken);
        }
        setIsAuthenticated(true);
        setUser(json.data.user);
        setToken(authToken);
        setEmail('');
        setPassword('');
      } else {
        setLoginError(json.message || 'Login failed. Invalid credentials.');
      }
    } catch (err) {
      setLoginError('Server error. Please try again later.');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogoutAction = () => {
    localStorage.removeItem('synckraft_admin_token');
    sessionStorage.removeItem('synckraft_admin_token');
    setIsAuthenticated(false);
    setUser(null);
    setToken('');
  };

  const handleChangePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError('');
    setPasswordSuccess('');

    if (newPassword.length < 8) {
      setPasswordError('New password must be at least 8 characters long.');
      return;
    }

    try {
      const res = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ currentPassword, newPassword }),
      });
      const json = await res.json();

      if (json.success) {
        setPasswordSuccess('Password updated successfully!');
        setCurrentPassword('');
        setNewPassword('');
        setTimeout(() => setShowPasswordModal(false), 2000);
      } else {
        setPasswordError(json.message || 'Failed to change password.');
      }
    } catch {
      setPasswordError('Server connection error.');
    }
  };

  // Fetch data based on tab selection
  useEffect(() => {
    if (!isAuthenticated) return;

    if (activeTab === 'dashboard') {
      fetchDashboardStats();
    } else if (activeTab === 'media') {
      fetchMediaList();
    } else if (activeTab === 'settings') {
      fetchSettings();
    } else {
      fetchCrudItems(activeTab);
    }
  }, [activeTab, isAuthenticated]);

  const fetchDashboardStats = async () => {
    setStatsLoading(true);
    try {
      const res = await fetch('/api/admin/dashboard-stats', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json();
      if (json.success) setDashboardStats(json.data);
    } catch (err) {
      console.error('Failed to fetch stats', err);
    } finally {
      setStatsLoading(false);
    }
  };

  const fetchMediaList = async () => {
    setMediaLoading(true);
    try {
      const url = `/api/media?folder=${selectedFolder}&search=${mediaSearch}`;
      const res = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json();
      if (json.success) setMediaList(json.data);
    } catch (err) {
      console.error(err);
    } finally {
      setMediaLoading(false);
    }
  };

  const fetchSettings = async () => {
    setSettingsLoading(true);
    try {
      const res = await fetch('/api/admin/settings', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json();
      if (json.success) setSettings(json.data);
    } catch (err) {
      console.error(err);
    } finally {
      setSettingsLoading(false);
    }
  };

  const saveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setSettingsSuccess(false);
    try {
      const res = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(settings),
      });
      const json = await res.json();
      if (json.success) {
        setSettingsSuccess(true);
        setTimeout(() => setSettingsSuccess(false), 3000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleExportNewsletter = async () => {
    try {
      const res = await fetch('/api/admin/newsletter/export', {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!res.ok) throw new Error('Failed to export');
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'newsletter_subscribers.csv';
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (err) {
      alert('Failed to export newsletter subscribers.');
    }
  };

  const fetchCrudItems = async (collection: string) => {
    setItemsLoading(true);
    try {
      const res = await fetch(`/api/admin/${collection}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json();
      if (json.success) setItemsList(json.data);
    } catch (err) {
      console.error(err);
    } finally {
      setItemsLoading(false);
    }
  };

  // Base64 File Uploader
  const handleMediaUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadLoading(true);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64Data = (reader.result as string).split(',')[1];
      try {
        const res = await fetch('/api/media', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            filename: file.name,
            contentType: file.type,
            base64Data,
            folder: selectedFolder,
          }),
        });
        const json = await res.json();
        if (json.success) {
          fetchMediaList();
        } else {
          alert(json.message);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setUploadLoading(false);
      }
    };
  };

  const handleMediaDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this file?')) return;
    try {
      const res = await fetch(`/api/media/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json();
      if (json.success) fetchMediaList();
    } catch (err) {
      console.error(err);
    }
  };

  // CRUD actions
  const openCreateModal = () => {
    setEditingItem(null);
    setFormData(getInitialFormStructure(activeTab));
    setShowFormModal(true);
  };

  const openEditModal = (item: any) => {
    setEditingItem(item);
    setFormData({ ...item });
    setShowFormModal(true);
  };

  const handleCrudDelete = async (id: string) => {
    if (!window.confirm('Delete this item permanently?')) return;
    try {
      const res = await fetch(`/api/admin/${activeTab}/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json();
      if (json.success) fetchCrudItems(activeTab);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCrudSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isEdit = !!editingItem;
    const url = isEdit ? `/api/admin/${activeTab}/${editingItem.id}` : `/api/admin/${activeTab}`;
    const method = isEdit ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      const json = await res.json();

      if (json.success) {
        setShowFormModal(false);
        fetchCrudItems(activeTab);
      } else {
        alert(json.message || 'Operation failed.');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getInitialFormStructure = (tab: TabId): Record<string, any> => {
    switch (tab) {
      case 'blogs':
        return { title: '', slug: '', excerpt: '', content: '', coverImage: '', category: 'Technology', tags: [], author: { name: '', role: '' } };
      case 'careers':
        return { title: '', department: 'Engineering', location: 'Amravati, MH (On-site)', type: 'Full-time', experience: '0-2 Years', description: '', requirements: [], status: 'Open' };
      default:
        return {};
    }
  };

  // Filter items in tables
  const filteredItems = itemsList.filter((item: any) => {
    const term = searchQuery.toLowerCase();
    return (
      (item.name && item.name.toLowerCase().includes(term)) ||
      (item.title && item.title.toLowerCase().includes(term)) ||
      (item.question && item.question.toLowerCase().includes(term)) ||
      (item.email && item.email.toLowerCase().includes(term))
    );
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4">
        {/* Subtle decorative glows */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 relative overflow-hidden shadow-2xl space-y-6">
          <div className="text-center space-y-2 relative z-10">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-blue-500" />
            </div>
            <h2 className="text-2xl font-black tracking-tight">Synckraft Admin Panel</h2>
            <p className="text-slate-400 text-xs font-semibold">Enter your credentials to manage operations.</p>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-4 relative z-10">
            <div className="space-y-1">
              <label className="text-[11px] uppercase font-bold tracking-wider text-slate-400">Work Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@synckraft.in"
                  required
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white transition-all"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] uppercase font-bold tracking-wider text-slate-400">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white transition-all"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs py-1">
              <label className="flex items-center gap-2 text-slate-400 font-medium cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-slate-800 text-blue-600 bg-slate-950 focus:ring-0 cursor-pointer"
                />
                Remember Me
              </label>
              <span className="text-blue-500 hover:underline cursor-pointer font-bold">Forgot Password?</span>
            </div>

            {loginError && (
              <p className="text-xs text-red-500 font-bold bg-red-500/10 border border-red-500/20 p-3 rounded-xl text-center">
                {loginError}
              </p>
            )}

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
            >
              {loginLoading ? 'Authenticating...' : 'Sign In'}
              <ChevronRight className="w-4 h-4" />
            </button>
          </form>

          <div className="text-center text-[10px] text-slate-500 border-t border-slate-800 pt-4">
            <p>Protected by active threat mitigation and SSL protocols.</p>
            <p className="mt-2 text-blue-500/70 hover:underline cursor-pointer" onClick={() => onNavigate('home')}>
              ← Back to Public Website
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col font-sans">
      {/* Admin Navbar */}
      <header className="h-16 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <span className="font-black text-lg tracking-tight bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent">
            Synckraft CMS
          </span>
          <span className="bg-blue-500/10 text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-blue-500/20">
            {user?.role}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowPasswordModal(true)}
            className="text-xs font-bold text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Key className="w-3.5 h-3.5" />
            Change Password
          </button>
          <div className="h-4 w-px bg-slate-800" />
          <span className="text-xs font-bold text-slate-300">Welcome, {user?.name}</span>
          <button
            onClick={handleLogoutAction}
            className="p-2 rounded-xl bg-slate-800 hover:bg-red-500/20 hover:text-red-500 transition-all text-slate-400 cursor-pointer"
            title="Log Out"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 border-r border-slate-800 bg-slate-900 flex flex-col justify-between p-4 shrink-0">
          <nav className="space-y-1">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 px-3 pb-2">Business Operations</div>
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'dashboard' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              Dashboard Analytics
            </button>
            <button
              onClick={() => setActiveTab('media')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'media' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <FolderOpen className="w-4 h-4" />
              Media Manager
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'settings' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Settings className="w-4 h-4" />
              System Settings
            </button>

            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 px-3 pt-6 pb-2">Website Modules</div>
            <button
              onClick={() => setActiveTab('blogs')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'blogs' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Blog Management
            </button>
            <button
              onClick={() => setActiveTab('careers')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'careers' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              Careers Management
            </button>
          </nav>

          <div className="border-t border-slate-800 pt-4 space-y-2">
            <p className="text-[10px] text-slate-500 text-center">Version 1.0.0 (Production)</p>
            <button
              onClick={() => onNavigate('home')}
              className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-[11px] font-bold transition-colors cursor-pointer text-center block"
            >
              Public Website Home
            </button>
          </div>
        </aside>

        {/* Content Pane */}
        <main className="flex-1 overflow-y-auto bg-slate-950 p-8 space-y-6">
          {/* DASHBOARD TAB */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-black">Dashboard Operations</h1>
                  <p className="text-slate-400 text-xs">Real-time web statistics and lead analytics.</p>
                </div>
                <button
                  onClick={fetchDashboardStats}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 font-bold text-xs rounded-xl transition-all cursor-pointer"
                >
                  Refresh Data
                </button>
              </div>

              {statsLoading ? (
                <div className="py-20 text-center text-slate-500 font-semibold text-xs">Loading analytics data...</div>
              ) : (
                <>
                  {/* Metric Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-center justify-between shadow-xs">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Total Website Visitors</span>
                        <span className="text-2xl font-black mt-1 block text-blue-500">{dashboardStats?.websiteVisitorsCount || 0}</span>
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
                        <Users className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-center justify-between shadow-xs">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Newsletter Subscribers</span>
                        <span className="text-2xl font-black mt-1 block text-purple-500">{dashboardStats?.newsletterSubscribersCount || 0}</span>
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-500">
                        <Mail className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-center justify-between shadow-xs">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Page Views Telemetry</span>
                        <span className="text-2xl font-black mt-1 block text-emerald-500">
                          {dashboardStats?.popularPages?.reduce((acc: number, curr: any) => acc + curr.views, 0) || 0}
                        </span>
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                        <Globe className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-center justify-between shadow-xs">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">CTA Clicks Logged</span>
                        <span className="text-2xl font-black mt-1 block text-indigo-500">
                          {dashboardStats?.ctaClicks?.reduce((acc: number, curr: any) => acc + (curr.clicks || 0), 0) || 0}
                        </span>
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Charts & Popular Pages */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left Column: popular pages & events */}
                    <div className="lg:col-span-8 space-y-6">
                      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xs space-y-4">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                          <Globe className="w-4 h-4 text-blue-500" />
                          Top Visited Pages (Dynamic analytics)
                        </h3>
                        <div className="space-y-3">
                          {dashboardStats?.popularPages?.map((page: any, idx: number) => (
                            <div key={idx} className="space-y-1">
                              <div className="flex justify-between text-xs font-bold">
                                <span>{page.page}</span>
                                <span className="text-slate-400">{page.views} Pageviews</span>
                              </div>
                              <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                                <div
                                  className="bg-blue-600 h-full rounded-full"
                                  style={{
                                    width: `${Math.min(100, (page.views / (dashboardStats.popularPages[0]?.views || 1)) * 100)}%`,
                                  }}
                                />
                              </div>
                            </div>
                          ))}
                          {(!dashboardStats?.popularPages || dashboardStats.popularPages.length === 0) && (
                            <p className="text-xs text-slate-500">No visitor records yet.</p>
                          )}
                        </div>
                      </div>

                      {/* CTA Clicks analytics */}
                      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xs space-y-4">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                          <TrendingUp className="w-4 h-4 text-indigo-500" />
                          CTA Click Interactions
                        </h3>
                        <div className="space-y-2">
                          {dashboardStats?.ctaClicks?.map((cta: any, idx: number) => (
                            <div key={idx} className="flex justify-between items-center py-2 border-b border-slate-800/50 text-xs">
                              <span className="font-semibold text-slate-300">{cta.cta}</span>
                              <span className="font-black bg-indigo-500/10 text-indigo-400 px-2 py-0.5 rounded-md border border-indigo-500/20">{cta.clicks} Clicks</span>
                            </div>
                          ))}
                          {(!dashboardStats?.ctaClicks || dashboardStats.ctaClicks.length === 0) && (
                            <p className="text-xs text-slate-500">No CTA click events recorded.</p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Recent Activities */}
                    <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xs space-y-4 flex flex-col">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 shrink-0">
                        <FileText className="w-4 h-4 text-purple-500" />
                        Recent Activities
                      </h3>
                      <div className="flex-1 overflow-y-auto space-y-4 pr-1">
                        {dashboardStats?.recentActivities?.map((act: any, idx: number) => (
                          <div key={idx} className="text-xs border-l-2 border-slate-800 pl-3 py-1 space-y-1">
                            <span className="text-[10px] font-bold text-slate-500 block">
                              {new Date(act.timestamp).toLocaleDateString()} at {new Date(act.timestamp).toLocaleTimeString()}
                            </span>
                            <p className="font-semibold text-slate-300">{act.message}</p>
                            <span className="text-[10px] font-bold text-blue-500">{act.user} ({act.email})</span>
                          </div>
                        ))}
                        {(!dashboardStats?.recentActivities || dashboardStats.recentActivities.length === 0) && (
                          <p className="text-xs text-slate-500 py-4 text-center">No recent activity.</p>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {/* MEDIA LIBRARY TAB */}
          {activeTab === 'media' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-black">Media Asset Manager</h1>
                  <p className="text-slate-400 text-xs">Upload and organization of site media and photos.</p>
                </div>
                <div className="flex items-center gap-3">
                  <select
                    value={selectedFolder}
                    onChange={(e) => setSelectedFolder(e.target.value)}
                    className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs font-bold text-white focus:outline-hidden"
                  >
                    <option value="general">Folder: General</option>
                    <option value="team">Folder: Team Avatars</option>
                    <option value="products">Folder: Products</option>
                    <option value="blogs">Folder: Blog Covers</option>
                  </select>
                  <label className="px-4 py-2 bg-blue-600 hover:bg-blue-500 font-bold text-xs rounded-xl transition-all cursor-pointer flex items-center gap-1.5">
                    <Upload className="w-3.5 h-3.5" />
                    {uploadLoading ? 'Uploading...' : 'Upload Image'}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleMediaUpload}
                      disabled={uploadLoading}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  value={mediaSearch}
                  onChange={(e) => setMediaSearch(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && fetchMediaList()}
                  placeholder="Search assets and press Enter..."
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-xs font-medium text-white focus:outline-hidden"
                />
              </div>

              {mediaLoading ? (
                <div className="py-20 text-center text-slate-500 text-xs font-semibold">Loading media library...</div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
                  {mediaList.map((media) => (
                    <div
                      key={media.id}
                      className="bg-slate-900 border border-slate-800 rounded-2xl p-3 space-y-3 relative group overflow-hidden shadow-xs flex flex-col justify-between"
                    >
                      <div className="aspect-square bg-slate-950 rounded-xl overflow-hidden flex items-center justify-center border border-slate-800/80">
                        <img
                          src={media.url}
                          alt={media.filename}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold truncate text-slate-300" title={media.filename}>
                          {media.filename}
                        </p>
                        <span className="text-[9px] font-semibold text-slate-500 block">
                          {(media.sizeBytes / 1024).toFixed(1)} KB
                        </span>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(media.url);
                            alert('Copied URL: ' + media.url);
                          }}
                          className="flex-1 py-1 bg-slate-800 hover:bg-slate-700 font-bold text-[9px] rounded-lg transition-colors cursor-pointer"
                        >
                          Copy Path
                        </button>
                        <button
                          onClick={() => handleMediaDelete(media.id)}
                          className="p-1 bg-slate-800 hover:bg-red-500/20 hover:text-red-500 text-slate-400 rounded-lg transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                  {mediaList.length === 0 && (
                    <div className="col-span-full py-16 text-center text-slate-500 text-xs font-bold">
                      No media files uploaded in this folder.
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* SYSTEM SETTINGS TAB */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-black">System Configurations</h1>
                <p className="text-slate-400 text-xs">Manage public business info, analytics pixels, and global SEO fallbacks.</p>
              </div>

              {settingsLoading ? (
                <div className="py-20 text-center text-slate-500 text-xs font-semibold">Loading system settings...</div>
              ) : (
                <form onSubmit={saveSettings} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-4xl space-y-6 shadow-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Company Name</label>
                      <input
                        type="text"
                        value={settings?.companyName || ''}
                        onChange={(e) => setSettings({ ...settings, companyName: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-hidden"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Primary Contact Email</label>
                      <input
                        type="email"
                        value={settings?.email || ''}
                        onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-hidden"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Primary Office Address</label>
                      <input
                        type="text"
                        value={settings?.address || ''}
                        onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-hidden"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Google Analytics (GA4) Tag ID</label>
                      <input
                        type="text"
                        value={settings?.googleAnalyticsId || ''}
                        onChange={(e) => setSettings({ ...settings, googleAnalyticsId: e.target.value })}
                        placeholder="G-XXXXXXXXXX"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-hidden"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Google Tag Manager (GTM) ID</label>
                      <input
                        type="text"
                        value={settings?.gtmId || ''}
                        onChange={(e) => setSettings({ ...settings, gtmId: e.target.value })}
                        placeholder="GTM-XXXXXXX"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-hidden"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Meta (Facebook) Pixel ID</label>
                      <input
                        type="text"
                        value={settings?.metaPixelId || ''}
                        onChange={(e) => setSettings({ ...settings, metaPixelId: e.target.value })}
                        placeholder="1234567890"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-hidden"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">LinkedIn Insight Partner ID</label>
                      <input
                        type="text"
                        value={settings?.linkedinInsightId || ''}
                        onChange={(e) => setSettings({ ...settings, linkedinInsightId: e.target.value })}
                        placeholder="1234567"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-hidden"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Microsoft Clarity Project ID</label>
                      <input
                        type="text"
                        value={settings?.clarityProjectId || ''}
                        onChange={(e) => setSettings({ ...settings, clarityProjectId: e.target.value })}
                        placeholder="abcdefghij"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-hidden"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">SEO Default Title</label>
                      <input
                        type="text"
                        value={settings?.seoDefaults?.title || ''}
                        onChange={(e) => setSettings({
                          ...settings,
                          seoDefaults: { ...settings.seoDefaults, title: e.target.value }
                        })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-hidden"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">SEO Default Description</label>
                      <input
                        type="text"
                        value={settings?.seoDefaults?.description || ''}
                        onChange={(e) => setSettings({
                          ...settings,
                          seoDefaults: { ...settings.seoDefaults, description: e.target.value }
                        })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-hidden"
                      />
                    </div>
                    <div className="space-y-1 col-span-full">
                      <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Universal Platform Webhook URL (Future Integration)</label>
                      <input
                        type="url"
                        value={settings?.universalPlatformWebhookUrl || ''}
                        onChange={(e) => setSettings({ ...settings, universalPlatformWebhookUrl: e.target.value })}
                        placeholder="https://platform.synckraft.in/api/v1/webhooks/leads"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-hidden"
                      />
                    </div>
                  </div>

                  {settingsSuccess && (
                    <p className="text-xs text-emerald-500 font-bold bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-xl text-center">
                      System settings successfully saved and synced.
                    </p>
                  )}

                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl transition-all cursor-pointer shadow-md"
                    >
                      Save Settings Configuration
                    </button>
                    
                    <button
                      type="button"
                      onClick={handleExportNewsletter}
                      className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs rounded-xl transition-all cursor-pointer shadow-md flex items-center gap-1.5"
                    >
                      <Upload className="w-3.5 h-3.5 rotate-180" />
                      Export Subscribers (CSV)
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* GENERIC CRUD MODULES */}
          {activeTab !== 'dashboard' && activeTab !== 'media' && activeTab !== 'settings' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-black capitalize">{activeTab} Management</h1>
                  <p className="text-slate-400 text-xs">Create, read, update, and delete site content for {activeTab}.</p>
                </div>
                <button
                  onClick={openCreateModal}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 font-bold text-xs rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add New Item
                </button>
              </div>

              {/* Filtering Search */}
              <div className="relative">
                <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={`Search ${activeTab}...`}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-xs font-medium text-white focus:outline-hidden"
                />
              </div>

              {itemsLoading ? (
                <div className="py-20 text-center text-slate-500 text-xs font-semibold">Loading data entries...</div>
              ) : (
                <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xs">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-slate-800 bg-slate-950 font-bold text-slate-400 uppercase tracking-wider">
                          <th className="p-4">Title / Name</th>
                          <th className="p-4">Metadata</th>
                          <th className="p-4">Date Created</th>
                          <th className="p-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredItems.map((item) => (
                          <tr key={item.id} className="border-b border-slate-800 hover:bg-slate-800/40 transition-colors">
                            <td className="p-4 font-bold text-slate-200">
                              {item.name || item.title || item.question || 'Unnamed Item'}
                            </td>
                            <td className="p-4 text-slate-400 max-w-xs truncate">
                              {item.designation || item.excerpt || item.answer || item.category || 'N/A'}
                            </td>
                            <td className="p-4 text-slate-500">
                              {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : 'N/A'}
                            </td>
                            <td className="p-4 text-right flex items-center justify-end gap-3">
                              <button
                                onClick={() => openEditModal(item)}
                                className="p-2 bg-slate-800 hover:bg-blue-600 hover:text-white rounded-lg text-slate-400 transition-colors cursor-pointer"
                                title="Edit"
                              >
                                <Edit className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleCrudDelete(item.id)}
                                className="p-2 bg-slate-800 hover:bg-red-500/20 hover:text-red-500 rounded-lg text-slate-400 transition-colors cursor-pointer"
                                title="Delete"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                        {filteredItems.length === 0 && (
                          <tr>
                            <td colSpan={4} className="p-8 text-center text-slate-500 font-bold">
                              No records found matching query.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}
        </main>
      </div>

      {/* CHANGE PASSWORD MODAL */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 w-full max-w-md space-y-4">
            <h3 className="text-lg font-black flex items-center gap-1.5 text-blue-500">
              <Key className="w-5 h-5" />
              Update Account Password
            </h3>

            <form onSubmit={handleChangePasswordSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Current Password</label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-hidden"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-hidden"
                />
              </div>

              {passwordError && <p className="text-xs text-red-500 font-bold">{passwordError}</p>}
              {passwordSuccess && <p className="text-xs text-emerald-500 font-bold">{passwordSuccess}</p>}

              <div className="flex gap-3 justify-end pt-2">
                <button
                  type="button"
                  onClick={() => setShowPasswordModal(false)}
                  className="px-4 py-2 bg-slate-850 hover:bg-slate-800 font-bold text-xs rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 font-bold text-xs rounded-xl cursor-pointer text-white"
                >
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CRUD DYNAMIC FORM MODAL */}
      {showFormModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 w-full max-w-lg space-y-4 max-h-[85vh] overflow-y-auto">
            <h3 className="text-lg font-black capitalize text-blue-500">
              {editingItem ? 'Edit' : 'Create'} {activeTab} Item
            </h3>

            <form onSubmit={handleCrudSubmit} className="space-y-4">
              {/* Dynamic form inputs based on activeTab */}
              {activeTab === 'team' && (
                <>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Member Name</label>
                    <input
                      type="text"
                      value={formData.name || ''}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-hidden"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Designation / Role</label>
                    <input
                      type="text"
                      value={formData.designation || ''}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                      required
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-hidden"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Department</label>
                    <select
                      value={formData.department || 'Engineering'}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-hidden"
                    >
                      <option value="Engineering">Engineering</option>
                      <option value="Sales">Sales & Marketing</option>
                      <option value="Management">Management</option>
                      <option value="HR">HR & Admin</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Photo URL</label>
                    <input
                      type="text"
                      value={formData.photo || ''}
                      onChange={(e) => setFormData({ ...formData, photo: e.target.value })}
                      placeholder="/team/member.jpeg"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-hidden"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Bio</label>
                    <textarea
                      value={formData.bio || ''}
                      onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-hidden"
                      rows={3}
                    />
                  </div>
                </>
              )}

              {activeTab === 'products' && (
                <>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Product Name</label>
                    <input
                      type="text"
                      value={formData.name || ''}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-hidden"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Description</label>
                    <textarea
                      value={formData.description || ''}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-hidden"
                      rows={3}
                    />
                  </div>
                </>
              )}

              {activeTab === 'blogs' && (
                <>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Blog Title</label>
                    <input
                      type="text"
                      value={formData.title || ''}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-hidden"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Slug</label>
                    <input
                      type="text"
                      value={formData.slug || ''}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      required
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-hidden"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Content</label>
                    <textarea
                      value={formData.content || ''}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      required
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-hidden font-mono"
                      rows={8}
                    />
                  </div>
                </>
              )}

              {/* FAQs, testimonials, careers & general fallbacks for standard values */}
              {activeTab !== 'team' && activeTab !== 'products' && activeTab !== 'blogs' && (
                <>
                  {Object.keys(getInitialFormStructure(activeTab)).map((key) => {
                    if (key === 'active' || key === 'status') return null;
                    return (
                      <div className="space-y-1" key={key}>
                        <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400 capitalize">{key}</label>
                        <input
                          type="text"
                          value={formData[key] || ''}
                          onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-hidden"
                        />
                      </div>
                    );
                  })}
                </>
              )}

              <div className="flex gap-3 justify-end pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowFormModal(false)}
                  className="px-4 py-2 bg-slate-850 hover:bg-slate-800 font-bold text-xs rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 font-bold text-xs rounded-xl cursor-pointer text-white"
                >
                  Save Entry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
