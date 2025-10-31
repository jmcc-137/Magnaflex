import React from 'react';
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { LiaXing } from 'react-icons/lia';


const links = [
  { name: 'Proveedor', url: '#' },
  { name: 'Cookies', url: '#' },
  { name: 'Protección de datos', url: '#' },
  { name: 'Aviso legal', url: '#' },
  { name: 'Código de integridad', url: '#' },
  { name: 'Canal de Denuncias', url: '#' },
];

const social = [
  { icon: <FaFacebookF />, url: '#' },
  { icon: <FaYoutube />, url: '#' },
  { icon: <FaInstagram />, url: '#' },
  { icon: <LiaXing />, url: '#' },
  { icon: <FaLinkedin />, url: '#' },
];

const Footer = () => (
  <footer className="w-full bg-gray-600 text-[#F2F2F2] py-8 mt-12">
    <div className="max-w-7xl mx-auto px-4">
      <hr className="border-[#000] mb-6" />
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <span className="text-sm">© 2025. Magnaflex</span>
          {links.map((l, i) => (
            <a key={i} href={l.url} className="text-sm hover:underline text-[#F2F2F2]">{l.name}</a>
          ))}
        </div>
        <div className="flex items-center gap-6 mt-4 md:mt-0">
          {social.map((s, i) => (
            <a key={i} href={s.url} className="text-2xl text-[#F2F2F2] hover:text-[#FFD700] transition">
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
