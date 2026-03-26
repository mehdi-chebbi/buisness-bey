'use client';

import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Share2, Link2, Coffee, BookOpen, HomeIcon, Star } from 'lucide-react';

const menuItems = [
  // Cafés
  { name: 'Espresso', description: 'Riche et audacieux, simple cuvette', price: '4 DT', category: 'coffee' },
  { name: 'Espresso Double', description: 'Double shot pour les amateurs', price: '6 DT', category: 'coffee' },
  { name: 'Cappuccino', description: 'Espresso avec lait vapeur et mousse', price: '7 DT', category: 'coffee' },
  { name: 'Latte', description: 'Espresso onctueux au lait crémeux', price: '8 DT', category: 'coffee' },
  { name: 'Americano', description: 'Espresso allongé à l\'eau chaude', price: '5 DT', category: 'coffee' },
  { name: 'Flat White', description: 'Micro-mousse veloutée et espresso', price: '9 DT', category: 'coffee' },
  { name: 'Mocha', description: 'Espresso, chocolat et lait vapeur', price: '10 DT', category: 'coffee' },
  { name: 'Macchiato', description: 'Espresso marqué de mousse de lait', price: '6 DT', category: 'coffee' },
  { name: 'Café Glacé', description: 'Cold brew servi sur glaçons', price: '8 DT', category: 'coffee' },
  { name: 'Café Turc', description: 'Café traditionnel à la turque', price: '5 DT', category: 'coffee' },
  { name: 'Café Direct', description: 'Café local tunisien classique', price: '4 DT', category: 'coffee' },
  { name: 'Cappuccino Glacé', description: 'Cappuccino glacé onctueux', price: '10 DT', category: 'coffee' },
  
  // Petit Déjeuner
  { name: 'Petit Déjeuner Complet', description: 'Œufs, fromage, pain, beurre, confiture, jus', price: '18 DT', category: 'breakfast' },
  { name: 'Œufs Brouillés', description: 'Œufs brouillés moelleux avec toast', price: '10 DT', category: 'breakfast' },
  { name: 'Omelette Fromage', description: 'Omelette fondante au fromage', price: '12 DT', category: 'breakfast' },
  { name: 'Omelette Jambon', description: 'Omelette au jambon et fromage', price: '14 DT', category: 'breakfast' },
  { name: 'Tartine Avocat', description: 'Avocat frais sur pain artisanal', price: '15 DT', category: 'breakfast' },
  { name: 'Tartine Fromage', description: 'Fromage frais sur pain grillé', price: '8 DT', category: 'breakfast' },
  { name: 'Pancakes', description: 'Pancakes moelleux au sirop d\'érable', price: '14 DT', category: 'breakfast' },
  { name: 'French Toast', description: 'Pain perdu croustillant et moelleux', price: '13 DT', category: 'breakfast' },
  { name: 'Brik à l\'Œuf', description: 'Brik traditionnel tunisien', price: '8 DT', category: 'breakfast' },
  
  // Pâtisseries & Desserts
  { name: 'Croissant', description: 'Pâtisserie feuilletée au beurre', price: '5 DT', category: 'food' },
  { name: 'Pain au Chocolat', description: 'Croissant fourré au chocolat', price: '6 DT', category: 'food' },
  { name: 'Cheesecake', description: 'Classique cheesecake onctueux', price: '12 DT', category: 'food' },
  { name: 'Brownie', description: 'Brownie fondant au chocolat', price: '10 DT', category: 'food' },
  { name: 'Tiramisu', description: 'Dessert italien au café', price: '14 DT', category: 'food' },
  { name: 'Cookie Géant', description: 'Cookie moelleux aux pépites', price: '8 DT', category: 'food' },
  { name: 'Muffin Chocolat', description: 'Muffin fondant au chocolat', price: '7 DT', category: 'food' },
  { name: 'Mille-Feuille', description: 'Pâtisserie feuilletée à la crème', price: '11 DT', category: 'food' },
  { name: 'Baklava', description: 'Pâtisserie orientale au miel', price: '8 DT', category: 'food' },
  { name: 'Glace (2 boules)', description: 'Glace artisanale, plusieurs parfums', price: '9 DT', category: 'food' },
  
  // Boissons Fraîches
  { name: 'Jus d\'Orange Frais', description: 'Oranges fraîchement pressées', price: '8 DT', category: 'drinks' },
  { name: 'Jus de Citron', description: 'Citronnade rafraîchissante', price: '7 DT', category: 'drinks' },
  { name: 'Jus de Fraise', description: 'Jus de fraise frais', price: '9 DT', category: 'drinks' },
  { name: 'Milkshake Vanille', description: 'Milkshake onctueux à la vanille', price: '10 DT', category: 'drinks' },
  { name: 'Milkshake Chocolat', description: 'Milkshake riche au chocolat', price: '10 DT', category: 'drinks' },
  { name: 'Smoothie Fruits Rouges', description: 'Mix de fruits rouges frais', price: '12 DT', category: 'drinks' },
  { name: 'Thé à la Menthe', description: 'Thé tunisien traditionnel', price: '5 DT', category: 'drinks' },
  { name: 'Eau Minérale', description: 'Eau minérale naturelle', price: '3 DT', category: 'drinks' },
  { name: 'Soda', description: 'Coca, Fanta, Sprite', price: '5 DT', category: 'drinks' },
  
  // Chicha
  { name: 'Chicha Pomme', description: 'Goût pomme verte fraîche', price: '25 DT', category: 'chicha' },
  { name: 'Chicha Raisin', description: 'Saveur raisin doux', price: '25 DT', category: 'chicha' },
  { name: 'Chicha Menthe', description: 'Menthe fraîche et rafraîchissante', price: '25 DT', category: 'chicha' },
  { name: 'Chicha Pastèque', description: 'Goût pastèque sucrée', price: '25 DT', category: 'chicha' },
  { name: 'Chicha Fraise', description: 'Saveur fraise gourmande', price: '25 DT', category: 'chicha' },
  { name: 'Chicha Blueberry', description: 'Myrtille onctueuse', price: '28 DT', category: 'chicha' },
  { name: 'Chicha Cocktail', description: 'Mix de saveurs exotiques', price: '30 DT', category: 'chicha' },
  { name: 'Chicha Glacée', description: 'Chicha avec glace, fraîcheur intense', price: '30 DT', category: 'chicha' },
];

const hours = [
  { day: 'Lun – Ven', time: '7h00 – 20h00' },
  { day: 'Samedi', time: '8h00 – 21h00' },
  { day: 'Dimanche', time: '9h00 – 18h00' },
];

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeTab, setActiveTab] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Logo URL
  const logoUrl = "https://i.ibb.co/7c0sv5f/Capture-d-cran-2026-03-26-113749.png";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const filtered = activeFilter === 'all' ? menuItems : menuItems.filter(i => i.category === activeFilter);

  const scrollTo = (id: string, tab: string) => {
    setActiveTab(tab);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", background: '#080604', color: '#f0e6d3', minHeight: '100vh', overflowX: 'hidden' }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Montserrat:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }
        body { overflow-x: hidden; }
        .sans { font-family: 'Montserrat', sans-serif; }

        /* Cosmic Background Elements */
        .cosmic-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.35;
          pointer-events: none;
          animation: float 25s infinite ease-in-out alternate;
        }
        .orb-1 { width: 700px; height: 700px; background: radial-gradient(circle, rgba(200,149,90,0.25), transparent 60%); top: -250px; left: -200px; }
        .orb-2 { width: 500px; height: 500px; background: radial-gradient(circle, rgba(180,130,60,0.15), transparent 60%); bottom: 5%; right: -150px; animation-delay: -8s; }
        
        @keyframes float {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          100% { transform: translate(40px, 60px) scale(1.1) rotate(10deg); }
        }

        /* Glitter Stars Effect */
        .star-layer {
          position: absolute; inset: 0; pointer-events: none;
          background-image: 
            radial-gradient(1px 1px at 20px 30px, rgba(255,255,255,0.9), transparent),
            radial-gradient(1.5px 1.5px at 40px 70px, rgba(255,255,255,0.5), transparent),
            radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,1), transparent),
            radial-gradient(1.2px 1.2px at 130px 80px, rgba(255,255,255,0.6), transparent),
            radial-gradient(1.4px 1.4px at 160px 120px, rgba(255,255,255,0.8), transparent);
          background-size: 250px 250px;
          opacity: 0.5;
          animation: twinkle 15s infinite linear;
        }
        @keyframes twinkle { from { background-position: 0 0; } to { background-position: -250px 0; } }

        /* HEADER */
        .bb-header {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          height: 70px; display: flex; align-items: center; justify-content: space-between;
          padding: 0 24px;
          transition: background 0.4s, border-color 0.4s;
        }
        .bb-header.scrolled {
          background: rgba(8,6,4,0.85);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(200,149,90,0.15);
        }

        /* BOTTOM NAV */
        .bottom-nav {
          position: fixed; bottom: 0; left: 0; right: 0; z-index: 100;
          height: 65px; background: rgba(8,6,4,0.92);
          border-top: 1px solid rgba(200,149,90,0.18);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          display: flex; align-items: stretch;
          padding-bottom: env(safe-area-inset-bottom, 0px);
        }
        .bnav-btn {
          flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 4px; background: none; border: none; cursor: pointer;
          color: rgba(240,230,211,0.35); transition: color 0.25s, transform 0.2s;
          -webkit-tap-highlight-color: transparent; touch-action: manipulation; padding: 0;
        }
        .bnav-btn.active { color: #d4a373; transform: translateY(-2px); }
        .bnav-label { font-family: 'Montserrat', sans-serif; font-size: 9px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }

        /* HERO GRAIN */
        .hero-grain {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E");
          pointer-events: none; opacity: 0.6;
        }

        /* MENU CARD */
        .menu-card {
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid rgba(200,149,90,0.08);
          transition: background 0.3s, transform 0.2s;
          -webkit-tap-highlight-color: transparent;
          background: rgba(255,255,255,0.01);
        }
        .menu-card:active { background: rgba(200,149,90,0.08); }
        
        /* FILTER CHIPS */
        .filter-chip {
          font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          border: 1px solid rgba(200,149,90,0.3); background: rgba(8,6,4,0.6);
          color: rgba(240,230,211,0.6); padding: 10px 16px; border-radius: 30px;
          cursor: pointer; transition: all 0.3s; white-space: nowrap;
          -webkit-tap-highlight-color: transparent; touch-action: manipulation;
          flex-shrink: 0;
        }
        .filter-chip.active { background: linear-gradient(45deg, #c8955a, #a67c45); border-color: transparent; color: #080604; box-shadow: 0 4px 15px rgba(200,149,90,0.3); }
        
        /* Filter container for mobile */
        .filter-scroll {
          display: flex; gap: 10px; padding: 0 24px 32px;
          overflow-x: auto; scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          scroll-snap-type: x mandatory;
        }
        .filter-scroll::-webkit-scrollbar { display: none; }
        
        /* Scroll fade indicators */
        .filter-wrapper { position: relative; }
        .filter-wrapper::before, .filter-wrapper::after {
          content: ''; position: absolute; top: 0; bottom: 32px; width: 30px;
          pointer-events: none; z-index: 2;
        }
        .filter-wrapper::before {
          left: 0; background: linear-gradient(to right, #080604 0%, transparent 100%);
        }
        .filter-wrapper::after {
          right: 0; background: linear-gradient(to left, #080604 0%, transparent 100%);
        }

        /* INPUTS */
        .bb-input {
          width: 100%; background: rgba(255,255,255,0.03);
          border: 1px solid rgba(200,149,90,0.15); border-radius: 8px;
          color: #f0e6d3; font-family: 'Montserrat', sans-serif; font-size: 15px;
          padding: 16px; outline: none; transition: all 0.3s;
          -webkit-appearance: none;
        }
        .bb-input:focus { border-color: #d4a373; background: rgba(255,255,255,0.05); box-shadow: 0 0 0 3px rgba(200,149,90,0.1); }
        .bb-input::placeholder { color: rgba(240,230,211,0.22); }
        textarea.bb-input { resize: none; }

        /* CTA BUTTON */
        .btn-cta {
          font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 600;
          letter-spacing: 0.15em; text-transform: uppercase;
          border: 1px solid #d4a373; background: transparent; color: #d4a373; border-radius: 50px;
          padding: 16px 34px; cursor: pointer; transition: all 0.3s;
          text-decoration: none; display: inline-flex; align-items: center; gap: 10px;
          min-height: 48px; touch-action: manipulation; -webkit-tap-highlight-color: transparent;
          position: relative; overflow: hidden;
        }
        .btn-cta:active { transform: scale(0.98); }
        .btn-cta.filled { background: linear-gradient(45deg, #d4a373, #c8955a); border: none; color: #080604; box-shadow: 0 4px 20px rgba(200,149,90,0.4); }
        .btn-cta.full { width: 100%; justify-content: center; }

        /* INFO ROW */
        .info-row {
          display: flex; align-items: center; gap: 16px;
          padding: 20px 0; border-bottom: 1px solid rgba(200,149,90,0.08);
          text-decoration: none; color: inherit; min-height: 60px;
          transition: opacity 0.2s;
        }
        .info-row:active { opacity: 0.7; }
        .info-row:last-child { border-bottom: none; }

        /* SOCIAL BTN */
        .social-btn {
          width: 50px; height: 50px; border: 1px solid rgba(200,149,90,0.2);
          display: flex; align-items: center; justify-content: center;
          color: #d4a373; text-decoration: none; transition: all 0.3s; border-radius: 50%;
          background: rgba(255,255,255,0.03);
          -webkit-tap-highlight-color: transparent; touch-action: manipulation;
        }
        .social-btn:active { background: #d4a373; color: #080604; }

        /* ANIMATIONS */
        @keyframes fadeUp { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
        .fu  { animation: fadeUp 1.2s 0s    cubic-bezier(0.16, 1, 0.3, 1) both; }
        .fu2 { animation: fadeUp 1.2s 0.2s  cubic-bezier(0.16, 1, 0.3, 1) both; }
        .fu3 { animation: fadeUp 1.2s 0.4s  cubic-bezier(0.16, 1, 0.3, 1) both; }
        @keyframes rotateSlow { to { transform: rotate(360deg); } }
        .spin { animation: rotateSlow 40s linear infinite; }
        @keyframes pulse { 0%,100%{opacity:0.4; transform:scale(1)} 50%{opacity:0.6; transform:scale(1.05)} }
        .pulse-glow { animation: pulse 4s infinite ease-in-out; }

        /* DESKTOP OVERRIDES */
        @media (min-width: 768px) {
          .bb-header { height: 75px; padding: 0 48px; }
          .d-nav { display: flex !important; gap: 40px; }
          .bottom-nav { display: none !important; }
          .page-body { padding-bottom: 0 !important; }
          .sp { padding-left: 48px !important; padding-right: 48px !important; }
          .menu-grid { display: grid !important; grid-template-columns: 1fr 1fr; gap: 20px; padding: 0 48px !important; }
          .hl-grid { display: grid !important; grid-template-columns: 1fr 1fr; gap: 0; }
          .ct-grid { display: grid !important; grid-template-columns: 1fr 1fr; gap: 56px; }
          .hero-h1 { font-size: clamp(82px, 16vw, 140px) !important; }
          .menu-card { border-radius: 12px; border-bottom: none; margin-bottom: 0; background: rgba(255,255,255,0.02); border: 1px solid rgba(200,149,90,0.05); }
          .menu-card:hover { background: rgba(200,149,90,0.05); transform: translateY(-2px); box-shadow: 0 10px 30px rgba(0,0,0,0.3); }
          .btn-cta:hover { transform: translateY(-2px); box-shadow: 0 5px 20px rgba(200,149,90,0.3); }
          .social-btn:hover { background: #d4a373; color: #080604; transform: translateY(-2px); }
          .nav-link {
            font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 500;
            letter-spacing: 0.2em; text-transform: uppercase;
            color: #f0e6d3; text-decoration: none; position: relative; padding-bottom: 5px; transition: color 0.3s;
          }
          .nav-link::after { content:''; position:absolute; bottom:0; left:0; width:0; height:1px; background:#d4a373; transition:width .35s ease; }
          .nav-link:hover { color: #d4a373; }
          .nav-link:hover::after { width: 100%; }
          .filter-scroll { justify-content: center !important; overflow-x: visible !important; }
          .filter-wrapper::before, .filter-wrapper::after { display: none !important; }
          .filter-chip { padding: 10px 20px !important; font-size: 11px !important; }
        }
      `}</style>

      {/* Cosmic Background Elements */}
      <div className="cosmic-orb orb-1" />
      <div className="cosmic-orb orb-2" />

      {/* ── HEADER ── */}
      <header className={`bb-header${scrolled ? ' scrolled' : ''}`}>
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          {/* Replaced Sparkles with actual logo */}
          <img 
            src={logoUrl} 
            alt="Business Bey Logo" 
            style={{ height: '42px', width: '42px', borderRadius: '50%', objectFit: 'cover', border: '1px solid rgba(200,149,90,0.4)', boxShadow: '0 4px 10px rgba(0,0,0,0.5)' }} 
          />
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', fontWeight: 400, letterSpacing: '0.1em', color: '#f0e6d3' }}>
            Business <span style={{ color: '#d4a373' }}>Bey</span>
          </span>
        </a>
        <nav className="d-nav" style={{ display: 'none' }}>
          {[['#menu','Menu'],['#location','Emplacement'],['#contact','Contact']].map(([href, label]) => (
            <a key={href} href={href} className="nav-link">{label}</a>
          ))}
        </nav>
      </header>

      {/* ── PAGE BODY ── */}
      <div className="page-body" style={{ paddingBottom: '65px' }}>

        {/* ─── HERO ─── */}
        <section id="hero" style={{ position: 'relative', minHeight: '100svh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '80px 24px 48px' }}>
          {/* Background Image */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'url(https://i.ibb.co/xKkGfGPC/641510215-122168601122848423-4151419390106855623-n.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
          {/* Dark overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,6,4,0.75)' }} />
          <div className="star-layer" />
          <div className="hero-grain" />

          {/* Rotating ring text */}
          <div className="spin" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 'min(420px, 95vw)', height: 'min(420px, 95vw)', pointerEvents: 'none' }}>
            <svg viewBox="0 0 360 360" style={{ width: '100%', height: '100%', opacity: 0.15 }}>
              <defs><path id="cp" d="M180,180 m-160,0 a160,160 0 1,1 320,0 a160,160 0 1,1 -320,0" /></defs>
              <text style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.25em', fill: '#d4a373' }}>
                <textPath href="#cp">CAFÉ SPÉCIALITÉ · L'AOUINA · TUNIS · EST. 2024 ·&nbsp;</textPath>
              </text>
            </svg>
          </div>

          {/* Central Glow */}
          <div className="pulse-glow" style={{ position: 'absolute', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(200,149,90,0.15) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none' }} />

          {/* Text content */}
          <div style={{ position: 'relative', textAlign: 'center', zIndex: 1, width: '100%' }}>
            <span className="fu sans" style={{ fontSize: '10px', letterSpacing: '0.5em', textTransform: 'uppercase', color: '#d4a373', fontWeight: 600, display: 'block', marginBottom: '24px', opacity: 0.9 }}>Bienvenue à</span>
            <h1 className="fu2 hero-h1" style={{ fontSize: 'clamp(70px, 22vw, 110px)', fontWeight: 300, letterSpacing: '0.02em', lineHeight: 0.9, color: '#f0e6d3', marginBottom: '30px', textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
              Business<br /><em style={{ color: '#d4a373', fontStyle: 'italic', fontFamily: "'Cormorant Garamond', serif" }}>Bey</em>
            </h1>
            <p className="fu3 sans" style={{ fontSize: '10px', fontWeight: 400, letterSpacing: '0.25em', color: 'rgba(240,230,211,0.5)', marginBottom: '50px', textTransform: 'uppercase' }}>
              Café Premium · L'Aouina, Tunis
            </p>
            <div className="fu3" style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
              <a href="#menu" className="btn-cta filled full" style={{ maxWidth: '300px' }} onClick={() => setActiveTab('menu')}>Explorer le Menu</a>
              <a href="#contact" className="btn-cta full" style={{ maxWidth: '300px' }} onClick={() => setActiveTab('contact')}>Réserver une Table</a>
            </div>
          </div>

          {/* Scroll cue */}
          <div style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
             <div style={{ width: '24px', height: '40px', borderRadius: '15px', border: '1px solid rgba(200,149,90,0.4)', position: 'relative', display: 'flex', justifyContent: 'center', paddingTop: '8px' }}>
                <div style={{ width: '4px', height: '8px', borderRadius: '2px', background: '#d4a373', animation: 'scrollBounce 2s infinite' }} />
             </div>
          </div>
          <style>{`@keyframes scrollBounce { 0%, 100% { transform: translateY(0); opacity: 1; } 50% { transform: translateY(10px); opacity: 0.3; } }`}</style>
        </section>

        {/* ─── TICKER STRIP ─── */}
        <div style={{ background: '#d4a373', padding: '14px 0', overflow: 'hidden', whiteSpace: 'nowrap' }}>
          {Array.from({ length: 6 }, (_, i) => (
            <span key={i} className="sans" style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#080604', fontWeight: 700, marginRight: '50px' }}>
              Café Spécialité &nbsp;·&nbsp; Pâtisseries Artisanales &nbsp;·&nbsp; Ambiance Cosy &nbsp;·
            </span>
          ))}
        </div>

        {/* ─── ABOUT US ─── */}
        <section id="about" style={{ padding: '60px 24px', position: 'relative' }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '32px',
            alignItems: 'center',
          }}>
            {/* Text Section */}
            <div style={{ textAlign: 'center' }}>
              <span className="sans" style={{ 
                fontSize: '10px', 
                fontWeight: 600, 
                letterSpacing: '0.4em', 
                textTransform: 'uppercase', 
                color: '#d4a373', 
                display: 'block', 
                marginBottom: '16px' 
              }}>À Propos</span>
              <h2 style={{ 
                fontSize: 'clamp(36px, 10vw, 52px)', 
                fontWeight: 300, 
                letterSpacing: '0.02em', 
                lineHeight: 1.1, 
                marginBottom: '20px',
                color: '#f0e6d3',
              }}>
                Notre <em style={{ color: '#d4a373', fontStyle: 'italic' }}>Histoire</em>
              </h2>
              <p style={{ 
                fontSize: '16px', 
                fontWeight: 300, 
                color: 'rgba(240,230,211,0.7)', 
                lineHeight: 1.8, 
                marginBottom: '16px',
              }}>
                Niché au cœur de L'Aouina, Business Bey est bien plus qu'un simple café. C'est un refuge, un espace où chaque tasse est préparée avec passion et où chaque instant devient un souvenir.
              </p>
              <p style={{ 
                fontSize: '16px', 
                fontWeight: 300, 
                color: 'rgba(240,230,211,0.7)', 
                lineHeight: 1.8,
              }}>
                Que vous soyez là pour un café rapide, un petit déjeuner copieux ou une soirée détente entre amis, notre équipe vous accueille avec chaleur dans une ambiance unique.
              </p>
            </div>
            
            {/* Image Grid */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '12px',
              width: '100%',
              maxWidth: '500px',
            }}>
              <div style={{
                borderRadius: '12px',
                overflow: 'hidden',
                aspectRatio: '1',
              }}>
                <img 
                  src="https://i.ibb.co/60Tj9xwP/629360307-122165915702848423-3725412382149744939-n.jpg"
                  alt="Café"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div style={{
                borderRadius: '12px',
                overflow: 'hidden',
                aspectRatio: '1',
              }}>
                <img 
                  src="https://i.ibb.co/bj2N5vjC/589040096-122154182402848423-1895799351891892350-n.jpg"
                  alt="Petit Déjeuner"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div style={{
                borderRadius: '12px',
                overflow: 'hidden',
                aspectRatio: '1',
              }}>
                <img 
                  src="https://i.ibb.co/gbjGcX3B/656755343-17881970907482007-4601940001420518899-n.jpg"
                  alt="Pâtisseries"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div style={{
                borderRadius: '12px',
                overflow: 'hidden',
                aspectRatio: '1',
                background: 'rgba(200,149,90,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '8px',
              }}>
                <span style={{ fontSize: '32px', fontWeight: 300, color: '#d4a373' }}>☕</span>
                <span className="sans" style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(240,230,211,0.6)' }}>Depuis 2024</span>
              </div>
            </div>
          </div>
          
          {/* Desktop styles */}
          <style>{`
            @media (min-width: 768px) {
              #about > div {
                flex-direction: row;
                align-items: center;
                gap: 60px;
                max-width: 1100px;
                margin: 0 auto;
              }
              #about > div > div:first-child {
                flex: 1;
                text-align: left;
              }
              #about > div > div:last-child {
                flex: 1;
                max-width: 450px;
              }
            }
          `}</style>
        </section>

        {/* ─── MENU ─── */}
        <section id="menu" style={{ padding: '80px 0 48px', position: 'relative' }}>
          <div className="sp" style={{ padding: '0 24px', marginBottom: '36px', textAlign: 'center' }}>
            <span className="sans" style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#d4a373', display: 'block', marginBottom: '12px' }}>Nos Offres</span>
            {/* Kept "Menu" as requested */}
            <h2 style={{ fontSize: 'clamp(44px, 12vw, 68px)', fontWeight: 300, letterSpacing: '0.02em', lineHeight: 1, marginBottom: '24px' }}>Menu</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '30px' }}>
              <div style={{ width: '40px', height: '1px', background: 'rgba(200,149,90,0.3)' }} />
              <Star size={12} color="#d4a373" style={{ marginTop: '-5px' }} />
              <div style={{ width: '40px', height: '1px', background: 'rgba(200,149,90,0.3)' }} />
            </div>
          </div>

          {/* Filter chips */}
          <div className="filter-wrapper">
            <div className="filter-scroll" style={{ justifyContent: 'flex-start' }}>
              {[
                ['all','Tout'],
                ['coffee','☕ Cafés'],
                ['breakfast','🍳 Petit Déj'],
                ['food','🍰 Pâtisseries'],
                ['drinks','🥤 Boissons'],
                ['chicha','💨 Chicha']
              ].map(([val, label]) => (
                <button key={val} className={`filter-chip${activeFilter === val ? ' active' : ''}`} onClick={() => setActiveFilter(val)} style={{ scrollSnapAlign: 'start' }}>{label}</button>
              ))}
            </div>
          </div>

          {/* Menu items */}
          <div className="menu-grid sp" style={{ padding: '0 24px' }}>
            {filtered.map(item => (
              <div key={item.name} className="menu-card">
                <div style={{ flex: 1, paddingRight: '20px' }}>
                  <p style={{ fontSize: '22px', fontWeight: 400, color: '#f0e6d3', marginBottom: '6px', letterSpacing: '0.01em' }}>{item.name}</p>
                  <p className="sans" style={{ fontSize: '12px', color: 'rgba(240,230,211,0.45)', letterSpacing: '0.02em', lineHeight: 1.5 }}>{item.description}</p>
                </div>
                <span className="sans" style={{ fontSize: '15px', fontWeight: 600, color: '#d4a373', flexShrink: 0, background: 'rgba(200,149,90,0.1)', padding: '4px 10px', borderRadius: '4px' }}>{item.price}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── QUOTE ─── */}
        <div style={{ background: 'linear-gradient(180deg, rgba(200,149,90,0.03) 0%, transparent 100%)', borderTop: '1px solid rgba(200,149,90,0.08)', padding: '70px 32px', textAlign: 'center', position: 'relative' }}>
           <div style={{ position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)', width: '6px', height: '6px', background: '#d4a373', borderRadius: '50%' }} />
          <p style={{ fontSize: 'clamp(22px, 6vw, 36px)', fontWeight: 300, fontStyle: 'italic', color: 'rgba(240,230,211,0.85)', lineHeight: 1.5, letterSpacing: '0.02em', maxWidth: '600px', margin: '0 auto' }}>
            "Un coin douillet où chaque tasse raconte une histoire."
          </p>
          <p className="sans" style={{ marginTop: '20px', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#d4a373', fontWeight: 600 }}>— Business Bey, L'Aouina</p>
        </div>

        {/* ─── LOCATION & HOURS ─── */}
        <section id="location" style={{ padding: '80px 0 48px' }}>
          <div className="sp" style={{ padding: '0 24px', marginBottom: '36px', textAlign: 'center' }}>
            <span className="sans" style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#d4a373', display: 'block', marginBottom: '12px' }}>Nous Trouver</span>
            <h2 style={{ fontSize: 'clamp(44px, 12vw, 68px)', fontWeight: 300, letterSpacing: '0.02em', lineHeight: 1 }}>Visitez-nous</h2>
          </div>

          <div className="hl-grid sp" style={{ padding: '0 24px', borderTop: '1px solid rgba(200,149,90,0.08)' }}>
            {/* Hours */}
            <div style={{ padding: '40px 0', borderBottom: '1px solid rgba(200,149,90,0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <Clock size={16} color="#d4a373" />
                <span className="sans" style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#d4a373', fontWeight: 600 }}>Horaires d'Ouverture</span>
              </div>
              {hours.map((h, i) => (
                <div key={h.day} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 0', borderBottom: i < hours.length - 1 ? '1px solid rgba(200,149,90,0.05)' : 'none' }}>
                  <span style={{ fontSize: '18px', fontWeight: 300, color: 'rgba(240,230,211,0.7)' }}>{h.day}</span>
                  <span className="sans" style={{ fontSize: '13px', fontWeight: 500, color: '#d4a373', letterSpacing: '0.05em', background: 'rgba(200,149,90,0.1)', padding: '4px 12px', borderRadius: '20px' }}>{h.time}</span>
                </div>
              ))}
            </div>

            {/* Location + Phone */}
            <div style={{ padding: '40px 0' }}>
              <a href="https://maps.google.com/?q=36.859194,10.257472" target="_blank" rel="noopener noreferrer" className="info-row">
                <div style={{ width: '50px', height: '50px', border: '1px solid rgba(200,149,90,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, borderRadius: '50%', background: 'rgba(200,149,90,0.05)' }}>
                  <MapPin size={18} color="#d4a373" />
                </div>
                <div>
                  <p className="sans" style={{ fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#d4a373', fontWeight: 600, marginBottom: '6px' }}>Emplacement</p>
                  <p style={{ fontSize: '19px', fontWeight: 300, color: 'rgba(240,230,211,0.85)' }}>L'Aouina, Tunisie</p>
                </div>
              </a>
              <a href="tel:+21621202026" className="info-row">
                <div style={{ width: '50px', height: '50px', border: '1px solid rgba(200,149,90,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, borderRadius: '50%', background: 'rgba(200,149,90,0.05)' }}>
                  <Phone size={18} color="#d4a373" />
                </div>
                <div>
                  <p className="sans" style={{ fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#d4a373', fontWeight: 600, marginBottom: '6px' }}>Appelez-nous</p>
                  <p style={{ fontSize: '22px', fontWeight: 300, color: 'rgba(240,230,211,0.85)', letterSpacing: '0.05em' }}>21.20.20.26</p>
                </div>
              </a>
            </div>
          </div>

          {/* Map - Exact Coordinates */}
          <div style={{ height: '280px', overflow: 'hidden', borderRadius: '0', boxShadow: 'inset 0 0 60px rgba(0,0,0,0.8)', border: '1px solid rgba(200,149,90,0.1)', margin: '0 24px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.5777713924564!2d10.255!3d36.859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDUxJzMzLjEiTiAxMMKwMTUnMjYuOSJF!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%" height="100%"
              style={{ border: 0, filter: 'invert(92%) hue-rotate(180deg) saturate(0.3) brightness(0.65)', display: 'block' }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        {/* ─── CONTACT ─── */}
        <section id="contact" style={{ padding: '80px 0 48px', background: 'linear-gradient(0deg, rgba(200,149,90,0.03) 0%, transparent 100%)' }}>
          <div className="sp" style={{ padding: '0 24px', marginBottom: '36px', textAlign: 'center' }}>
            <span className="sans" style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#d4a373', display: 'block', marginBottom: '12px' }}>Dites Bonjour</span>
            <h2 style={{ fontSize: 'clamp(44px, 12vw, 68px)', fontWeight: 300, letterSpacing: '0.02em', lineHeight: 1 }}>Contact</h2>
          </div>

          <div className="ct-grid sp" style={{ padding: '0 24px' }}>
            {/* Contact info */}
            <div style={{ marginBottom: '48px' }}>
              <p style={{ fontSize: '18px', fontWeight: 300, color: 'rgba(240,230,211,0.6)', lineHeight: 1.7, marginBottom: '32px' }}>
                Des questions ? Une réservation ? Nous serions ravis de vous entendre.
              </p>
              {[
                { icon: <Phone size={15} color="#d4a373" />, label: 'Téléphone', value: '21.20.20.26', href: 'tel:+21621202026' },
                { icon: <Mail size={15} color="#d4a373" />, label: 'Email', value: 'contact@businessbey.tn', href: 'mailto:contact@businessbey.tn' },
                { icon: <MapPin size={15} color="#d4a373" />, label: 'Adresse', value: "L'Aouina, Tunisie", href: null },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '16px 0', borderBottom: '1px solid rgba(200,149,90,0.06)' }}>
                  <div style={{ marginTop: '2px', flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <p className="sans" style={{ fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#d4a373', fontWeight: 600, marginBottom: '5px' }}>{item.label}</p>
                    {item.href
                      ? <a href={item.href} style={{ fontSize: '17px', fontWeight: 300, color: 'rgba(240,230,211,0.85)', textDecoration: 'none' }}>{item.value}</a>
                      : <p style={{ fontSize: '17px', fontWeight: 300, color: 'rgba(240,230,211,0.85)' }}>{item.value}</p>
                    }
                  </div>
                </div>
              ))}
              <div style={{ marginTop: '32px' }}>
                <p className="sans" style={{ fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#d4a373', fontWeight: 600, marginBottom: '16px' }}>Suivez-nous</p>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <a href="https://instagram.com/businessbey" target="_blank" rel="noopener noreferrer" className="social-btn"><Share2 size={18} /></a>
                  <a href="https://facebook.com/businessbey" target="_blank" rel="noopener noreferrer" className="social-btn"><Link2 size={18} /></a>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {([
                { id: 'name', label: 'Votre Nom', type: 'text', placeholder: 'Ahmed Ben Ali' },
                { id: 'email', label: 'Adresse Email', type: 'email', placeholder: 'bonjour@exemple.com' },
              ] as const).map(field => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="sans" style={{ fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#d4a373', fontWeight: 600, display: 'block', marginBottom: '12px' }}>{field.label}</label>
                  <input id={field.id} type={field.type} placeholder={field.placeholder} className="bb-input"
                    value={formData[field.id]} onChange={e => setFormData({ ...formData, [field.id]: e.target.value })} required />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="sans" style={{ fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#d4a373', fontWeight: 600, display: 'block', marginBottom: '12px' }}>Message</label>
                <textarea id="message" rows={4} placeholder="Votre message..." className="bb-input"
                  value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} required />
              </div>
              <button type="submit" className="btn-cta filled full">
                <Send size={14} /> Envoyer le Message
              </button>
              {submitted && (
                <p className="sans" style={{ fontSize: '12px', color: '#d4a373', letterSpacing: '0.1em', textAlign: 'center', fontWeight: 500 }}>
                  ✓ Message envoyé ! Nous vous répondrons bientôt.
                </p>
              )}
            </form>
          </div>
        </section>

        {/* ─── FOOTER ─── */}
        <footer style={{ borderTop: '1px solid rgba(200,149,90,0.1)', padding: '40px 24px', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '20px' }}>
             {/* Replaced Sparkles with actual logo */}
             <img 
                src={logoUrl} 
                alt="Business Bey Logo" 
                style={{ height: '32px', width: '32px', borderRadius: '50%', objectFit: 'cover', border: '1px solid rgba(200,149,90,0.2)' }} 
             />
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px', fontWeight: 400, letterSpacing: '0.1em', color: '#f0e6d3' }}>
              Business <span style={{ color: '#d4a373' }}>Bey</span>
            </span>
          </div>
          <p className="sans" style={{ fontSize: '10px', color: 'rgba(240,230,211,0.25)', letterSpacing: '0.15em' }}>
            © {new Date().getFullYear()} Business Bey · L'Aouina, Tunisie
          </p>
        </footer>
      </div>

      {/* ── BOTTOM NAV ── */}
      <nav className="bottom-nav">
        {[
          { tab: 'home',     icon: <HomeIcon size={20} />,     label: 'Accueil',     id: 'hero' },
          { tab: 'menu',     icon: <BookOpen size={20} />, label: 'Menu',     id: 'menu' },
          { tab: 'location', icon: <MapPin size={20} />,   label: 'Lieu', id: 'location' },
          { tab: 'contact',  icon: <Coffee size={20} />,   label: 'Contact',  id: 'contact' },
        ].map(({ tab, icon, label, id }) => (
          <button key={tab} className={`bnav-btn${activeTab === tab ? ' active' : ''}`} onClick={() => scrollTo(id, tab)}>
            {icon}
            <span className="bnav-label">{label}</span>
          </button>
        ))}
      </nav>

    </div>
  );
}