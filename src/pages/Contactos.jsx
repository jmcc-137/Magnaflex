import React, { useState } from 'react'
import { usePageTitle } from '../hooks';
import { PAGE_NAMES } from '../components/PageHeaderIcons';
import { useLanguage } from '../hooks';
import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaClock, FaTools, FaBox, FaCheckCircle, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { COLORS } from '../constants/theme';
import Footer from '../components/Footer';

const Contactos = () => {
  usePageTitle(PAGE_NAMES.contactos);
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    telefono: '',
    email: '',
    ciudad: '',
    tipo: '',
    mensaje: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({
        nombre: '',
        empresa: '',
        telefono: '',
        email: '',
        ciudad: '',
        tipo: '',
        mensaje: ''
      });
      setFormSubmitted(false);
    }, 3000);
  };

  const contactBlocks = [
    {
      title: t('contactos.sales_title'),
      icon: FaPhone,
      items: [
        { label: t('contactos.phone'), value: '+57 (7) 600 1001', action: 'tel' },
        { label: t('contactos.email'), value: 'ventas@magnaflex.com', action: 'email' },
        { label: t('contactos.whatsapp'), value: '+57 300 123 4567', action: 'whatsapp' }
      ],
      description: t('contactos.sales_desc')
    },
    {
      title: t('contactos.support_title'),
      icon: FaTools,
      items: [
        { label: t('contactos.phone'), value: '+57 (7) 600 1002', action: 'tel' },
        { label: t('contactos.email'), value: 'tecnico@magnaflex.com', action: 'email' },
        { label: t('contactos.whatsapp'), value: '+57 300 234 5678', action: 'whatsapp' }
      ],
      description: t('contactos.support_desc')
    }
  ];

  const razones = [
    { text: t('contactos.reason1') },
    { text: t('contactos.reason2') },
    { text: t('contactos.reason3') },
    { text: t('contactos.reason4') },
    { text: t('contactos.reason5') },
    { text: t('contactos.reason6') }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="grow">
        {/* Hero Section con imagen de fondo */}
        <div 
          className="relative w-full min-h-96 flex items-center justify-center pt-32 pb-12 bg-cover"
          style={{
            backgroundImage: 'url(/Tecnica.jpg)',
            backgroundPosition: '80% 30%',
            backgroundSize: 'cover',
          }}
        >
          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-black/50"></div>
          
          {/* Contenido */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              {t('contactos.title')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl md:text-2xl mb-4 opacity-90"
            >
              {t('contactos.subtitle')}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex gap-6 text-lg font-semibold justify-center flex-wrap"
            >
              <span>{t('contactos.service_type')}</span>
              <span className="opacity-50">/</span>
              <span>{t('contactos.sales_type')}</span>
            </motion.div>
          </div>
        </div>

        {/* Subtítulo profesional */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 mt-12">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-700 text-center max-w-3xl mx-auto"
          >
            {t('contactos.description')}
            <br className="hidden sm:block" />
            <span className="font-semibold" style={{ color: COLORS.primary }}>{t('contactos.hours_info')}</span>
          </motion.p>
        </div>

      {/* Bloques de contacto */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactBlocks.map((block, idx) => {
            const IconComponent = block.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 border-t-4"
                style={{ borderTopColor: COLORS.primary }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${COLORS.primary}15` }}
                  >
                    <IconComponent className="text-3xl" style={{ color: COLORS.primary }} />
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: COLORS.primary }}>{block.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 text-sm">{block.description}</p>
                <div className="space-y-4">
                  {block.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-3">
                      <span className="text-gray-500 font-semibold text-sm pt-1 min-w-20">{item.label}</span>
                      <a 
                        href={
                          item.action === 'tel' ? `tel:${item.value.replace(/\D/g, '')}` :
                          item.action === 'email' ? `mailto:${item.value}` :
                          item.action === 'whatsapp' ? `https://wa.me/${item.value.replace(/\D/g, '')}` :
                          '#'
                        }
                        target={item.action === 'whatsapp' ? '_blank' : '_self'}
                        rel={item.action === 'whatsapp' ? 'noopener noreferrer' : ''}
                        className="font-semibold hover:opacity-75 transition-opacity"
                        style={{ color: COLORS.primary }}
                      >
                        {item.value}
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Razones para contactar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t('contactos.why_contact')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {razones.map((razon, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + idx * 0.05 }}
              className="flex items-center gap-4 p-4 bg-white rounded-lg border-l-4"
              style={{ borderLeftColor: COLORS.primary }}
            >
              <FaCheckCircle className="text-2xl shrink-0" style={{ color: COLORS.primary }} />
              <span className="text-lg font-semibold text-gray-900">{razon.text}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Formulario de contacto */}
      <div className="bg-white py-16 mb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t('contactos.form_title')}</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <label className="block text-sm font-semibold text-gray-900 mb-2">{t('contactos.name')} *</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 transition-colors"
                  placeholder={t('contactos.name')}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <label className="block text-sm font-semibold text-gray-900 mb-2">{t('contactos.company')}</label>
                <input
                  type="text"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 transition-colors"
                  placeholder={t('contactos.company')}
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <label className="block text-sm font-semibold text-gray-900 mb-2">{t('contactos.phone_label')} *</label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 transition-colors"
                  placeholder="+57 300 123 4567"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <label className="block text-sm font-semibold text-gray-900 mb-2">{t('contactos.email_label')} *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 transition-colors"
                  placeholder="tu@email.com"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <label className="block text-sm font-semibold text-gray-900 mb-2">{t('contactos.city')}</label>
                <input
                  type="text"
                  name="ciudad"
                  value={formData.ciudad}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 transition-colors"
                  placeholder={t('contactos.city')}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <label className="block text-sm font-semibold text-gray-900 mb-2">{t('contactos.need')} *</label>
                <select
                  name="tipo"
                  value={formData.tipo}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 transition-colors"
                >
                  <option value="">{t('contactos.select_option')}</option>
                  <option value="cotizacion">{t('contactos.quote')}</option>
                  <option value="armado">{t('contactos.hose_assembly')}</option>
                  <option value="compatibilidad">{t('contactos.compatibility')}</option>
                  <option value="soporte">{t('contactos.technical_support')}</option>
                  <option value="otro">{t('contactos.other')}</option>
                </select>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <label className="block text-sm font-semibold text-gray-900 mb-2">{t('contactos.message')} *</label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleInputChange}
                required
                rows="5"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 transition-colors resize-none"
                placeholder={t('contactos.message_placeholder')}
              />
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              type="submit"
              className="w-full py-4 rounded-lg font-bold text-lg text-white transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: COLORS.primary }}
            >
              {formSubmitted ? t('contactos.sent_confirmation') : t('contactos.send_request')}
            </motion.button>
          </form>
        </div>
      </div>

      {/* Mapa y datos legales */}
      <div className="py-16" style={{ backgroundColor: `${COLORS.primary}08` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t('contactos.location_title')}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mapa */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-xl overflow-hidden shadow-lg h-96 border-4"
              style={{ borderColor: COLORS.primary }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.887286353123!2d-73.11765292432618!3d7.124191770526236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e68a4c8c8c8c8c9%3A0x8c8c8c8c8c8c8c8c!2sCarrera%2022%20%2345-67%2C%20Bucaramanga!5e0!3m2!1ses!2sco!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación MAGNAFLEX"
              />
            </motion.div>

            {/* Datos legales */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4" style={{ borderLeftColor: COLORS.primary }}>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: COLORS.primary }}>
                  <FaMapMarkerAlt />
                  {t('contactos.main_location')}
                </h3>
                <p className="text-gray-700 text-lg font-semibold mb-2">{t('contactos.address')}</p>
                <p className="text-gray-600">{t('contactos.city_country')}</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4" style={{ borderLeftColor: COLORS.primary }}>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: COLORS.primary }}>
                  <FaClock />
                  {t('contactos.hours_title')}
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p><span className="font-semibold">{t('contactos.mon_to_sat')}</span> 7:30 AM – 5:00 PM</p>
                  <p><span className="font-semibold">{t('contactos.technical_support_hours')}</span> L–V 8:00 AM – 6:00 PM</p>
                  <p className="text-sm text-gray-500 italic">{t('contactos.special_hours')}</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4" style={{ borderLeftColor: COLORS.primary }}>
                <h3 className="text-xl font-bold mb-4" style={{ color: COLORS.primary }}>{t('contactos.legal_info')}</h3>
                <div className="space-y-2 text-gray-700">
                  <p><span className="font-semibold">{t('contactos.nit')}</span> 123.456.789-0</p>
                  <p><span className="font-semibold">{t('contactos.regime')}</span> {t('contactos.regime_value')}</p>
                  <p><span className="font-semibold">{t('contactos.certifications')}</span> ISO 9001:2015, SAE, DIN</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4" style={{ borderLeftColor: COLORS.primary }}>
                <h3 className="text-xl font-bold mb-4" style={{ color: COLORS.primary }}>{t('contactos.follow_us')}</h3>
                <div className="flex gap-4">
                  {[
                    { Icon: FaFacebookF, url: 'https://www.facebook.com/share/17tmnTEatD/?mibextid=wwXIfr' },
                    { Icon: FaInstagram, url: 'https://www.instagram.com/magnaflex.ve?igsh=dW4xd3BramU2OXd4' },
                    { Icon: FaTiktok, url: 'https://www.tiktok.com/@magnaflex?_r=1&_t=ZM-91VZQpvSZXn' }
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:text-white hover:scale-110"
                      style={{ backgroundColor: `${COLORS.primary}20`, color: COLORS.primary }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = COLORS.primary}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = `${COLORS.primary}20`}
                    >
                      <social.Icon className="text-xl" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Botón flotante WhatsApp (solo móvil) */}
      <a
        href="https://wa.me/573001234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 lg:hidden w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl shadow-2xl hover:scale-110 transition-transform z-40"
        style={{ backgroundColor: '#25D366' }}
        title="Contáctanos por WhatsApp"
      >
        <FaWhatsapp />
      </a>
      </div>
      <Footer />
    </div>
  );
}

export default Contactos;
