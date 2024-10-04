import { FaUserTie, FaHome, FaImage, FaNewspaper, FaReply, FaChartBar } from 'react-icons/fa';

export const Links = [
  { name: 'Dashboard', href: route('dashboard'), icon: FaHome, current: true },
  { name: 'Galeri', href: route('galeri.dashboard'), icon: FaImage, current: false },
  { name: 'Berita', href: route('articles.dashboard'), icon: FaNewspaper, current: false },
  { name: 'Potensi', href: route('potensi.dashboard'), icon: FaChartBar, current: false },
  { name: 'Pamong', href: route('pamong.dashboard'), icon: FaUserTie, current: false },
  { name: 'Reports', href: '#', icon: FaReply, current: false },
];
