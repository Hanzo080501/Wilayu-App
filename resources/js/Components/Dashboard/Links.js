import { FaUserTie, FaHome, FaImage, FaNewspaper, FaReply, FaChartBar } from 'react-icons/fa';

export const Links = [
  { name: 'Dashboard', href: route('dashboard'), icon: FaHome, current: true },
  { name: 'Galeri', href: route('galery.index'), icon: FaImage, current: false },
  { name: 'Berita', href: route('articles.index'), icon: FaNewspaper, current: false },
  { name: 'Potensi', href: route('potensi.index'), icon: FaChartBar, current: false },
  { name: 'Pamong', href: route('pamong.index'), icon: FaUserTie, current: false },
  { name: 'Reports', href: '#', icon: FaReply, current: false },
];
