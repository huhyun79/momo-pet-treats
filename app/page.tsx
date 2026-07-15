"use client";

import { useMemo, useState } from "react";

type Category = "\uc804\uccb4" | "\uac15\uc544\uc9c0" | "\uace0\uc591\uc774" | "\uad6c\uac15 \ucf00\uc5b4";
const copy = {
  shipping: "\uc2e0\uaddc \uac00\uc785 \uc2dc \uccab \uad6c\ub9e4 \ubb34\ub8cc \ubc30\uc1a1",
  shop: "\uac04\uc2dd \uace0\ub974\uae30", story: "MOMO \uc774\uc57c\uae30", guide: "\uac04\uc2dd \uac00\uc774\ub4dc",
  cart: "\uc7a5\ubc14\uad6c\ub2c8", eyebrow: "GOOD TREATS, GOOD DAYS",
  heroTitle: "\uc624\ub298\ub3c4 \uc798 \uba39\uace0,", heroAccent: "\ub354 \uc2e0\ub098\uac8c.",
  heroText: "\ubc18\ub824\ub3d9\ubb3c\uc758 \ud558\ub8e8\ub97c \uc0dd\uac01\ud55c \uc791\uc740 \uac04\uc2dd. \uc88b\uc740 \uc7ac\ub8cc\uc640 \ub2e4\uc815\ud55c \ub9c8\uc74c\ub9cc \ub2f4\uc558\uc5b4\uc694.",
  explore: "\uac04\uc2dd \ub458\ub7ec\ubcf4\uae30", made: "\uad6d\ub0b4 \uc81c\uc870", clear: "\uc131\ubd84\uc744 \ud22c\uba85\ud558\uac8c", newFlavor: "\ub9e4\ub2ec \uc0c8\ub85c\uc6b4 \ub9db",
  rating: "\ubcf4\ud638\uc790 \ub9cc\uc871\ub3c4", friends: "\ud568\uaed8\ud558\ub294 \uce5c\uad6c\ub4e4", ingredients: "\uc131\ubd84 \uacf5\uac1c",
  trust: "\uae4c\ub2e4\ub85c\uc6b4 \uc6b0\ub9ac \uc544\uc774\ub3c4 \uaf2c\ub9ac\ubd80\ud130 \ud754\ub4e4\uc5b4\uc694.",
  find: "\uc6b0\ub9ac \uc544\uc774\uc5d0\uac8c \ub531 \ub9de\ub294", findAccent: "\uac04\uc2dd\uc744 \ucc3e\uc544\ubcf4\uc138\uc694.",
  browse: "\uc785\ub9db\ub3c4 \ucde8\ud5a5\ub3c4 \ubaa8\ub450 \ub2e4\ub974\ub2c8\uae4c. \uce74\ud14c\uace0\ub9ac\ub85c \uc27d\uac8c \ucc3e\uc544\ubcfc \uc218 \uc788\uc5b4\uc694.",
  why: "\uac04\uc2dd \ud558\ub098\uc5d0\ub3c4 \ub9c8\uc74c\uc774 \ubcf4\uc5ec\uc57c \ud558\ub2c8\uae4c.", storyText: "\uc6b0\ub9ac\ub294 \ub2e8\uc21c\ud788 \ub9db\uc788\ub294 \uac04\uc2dd\uc744 \ub9cc\ub4e4\uc9c0 \uc54a\uc544\uc694. \ub9e4\uc77c\uc758 \ucee8\ub514\uc158\uacfc \uc624\ub798 \ud568\uaed8\ud560 \uac74\uac15\uae4c\uc9c0 \uc0dd\uac01\ud574 \uaf2d \ud544\uc694\ud55c \uac83\ub9cc \ub2f4\uc2b5\ub2c8\ub2e4.",
  standards: "MOMO\uc758 \uae30\uc900 \uc77d\uc5b4\ubcf4\uae30", guideTitle: "\ub354 \uc798 \uc54c\uace0, \ub354 \uc798 \ucc59\uaca8\uc694.",
  guide1: "\uac04\uc2dd\uc740 \ud558\ub8e8\uc5d0 \uc5bc\ub9c8\ub098?", guide2: "\uc131\ubd84\ud45c, \uc774\ub807\uac8c \uc77d\uc5b4\uc694", guide3: "\ucc98\uc74c \ub9cc\ub098\ub294 \uac04\uc2dd",
  guideText1: "\uc544\uc774\uc758 \uccb4\uc911\uacfc \ud65c\ub3d9\ub7c9\uc5d0 \ub9de\ucd98 \uc801\uc815 \uae09\uc5ec\ub7c9\uc744 \uc54c\ub824\ub4dc\ub824\uc694.",
  guideText2: "\ubcf5\uc7a1\ud55c \uc131\ubd84\ud45c \uc18d\uc5d0\uc11c \uaf2d \ud655\uc778\ud574\uc57c \ud560 \ud3ec\uc778\ud2b8\ub9cc \ubaa8\uc558\uc5b4\uc694.",
  guideText3: "\uc0c8\ub85c\uc6b4 \uac04\uc2dd\uc744 \uc548\uc804\ud558\uac8c \uc2dc\uc791\ud558\ub294 \ubc29\ubc95\uc744 \uc18c\uac1c\ud574\uc694.",
  read: "\uac00\uc774\ub4dc \ubcf4\uae30", footer: "\uc791\uc740 \uac04\uc2dd\uc774 \ub9cc\ub4dc\ub294, \ucee4\ub2e4\ub780 \ud558\ub8e8\uc758 \uae30\uc068."
};

const categories: Category[] = ["\uc804\uccb4", "\uac15\uc544\uc9c0", "\uace0\uc591\uc774", "\uad6c\uac15 \ucf00\uc5b4"];
const products = [
  { name: "\ud5c8\ube0c \uce58\uc11d \uad00\ub9ac \uce04 \uc2a4\ud2f1", pet: "\uac15\uc544\uc9c0", category: "\uad6c\uac15 \ucf00\uc5b4" as Category, price: 12900, icon: "LEAF", tone: "sage", sales: "\uc774\ubc88 \ub2ec 1,240\uac1c \ud310\ub9e4" },
  { name: "\uc5f0\uc5b4 \ud050\ube0c \ud2b8\ub9bf", pet: "\uace0\uc591\uc774", category: "\uace0\uc591\uc774" as Category, price: 8900, icon: "FISH", tone: "coral", sales: "\uc774\ubc88 \ub2ec 980\uac1c \ud310\ub9e4" },
  { name: "\uc624\ub9ac \uc548\uc2ec \uc800\ud0a4", pet: "\uac15\uc544\uc9c0", category: "\uac15\uc544\uc9c0" as Category, price: 14900, icon: "DUCK", tone: "sand", sales: "\uc774\ubc88 \ub2ec 760\uac1c \ud310\ub9e4" },
  { name: "\ub3d9\uacb0\uac74\uc870 \uce58\ud0a8 \ud558\ud2b8", pet: "\uace0\uc591\uc774", category: "\uace0\uc591\uc774" as Category, price: 10900, icon: "CHICKEN", tone: "lavender", sales: "\uc774\ubc88 \ub2ec 620\uac1c \ud310\ub9e4" },
  { name: "\ub9d0\ub791 \uce58\uc988 \ud2b8\ub9bf", pet: "\uac15\uc544\uc9c0", category: "\uac15\uc544\uc9c0" as Category, price: 9900, icon: "CHEESE", tone: "yellow", sales: "\uc774\ubc88 \ub2ec 540\uac1c \ud310\ub9e4" },
  { name: "\ubbfc\ud2b8 \ub374\ud0c8 \uc2a4\ub0b5", pet: "\uac15\uc544\uc9c0", category: "\uad6c\uac15 \ucf00\uc5b4" as Category, price: 11900, icon: "MINT", tone: "mint", sales: "\uc774\ubc88 \ub2ec 430\uac1c \ud310\ub9e4" },
];

export default function Home() {
  const [category, setCategory] = useState<Category>("\uc804\uccb4");
  const [cart, setCart] = useState(0);
  const visibleProducts = useMemo(() => category === "\uc804\uccb4" ? products : products.filter((item) => item.category === category), [category]);

  return (
    <main>
      <div className="announcement">{copy.shipping} <span>&gt;</span></div>
      <header className="site-header">
        <a className="brand" href="#top"><span className="brand-mark">M</span><span>MOMO</span></a>
        <nav className="nav-links" aria-label="\uc8fc\uc694 \uba54\ub274"><a href="#shop">{copy.shop}</a><a href="#story">{copy.story}</a><a href="#guide">{copy.guide}</a></nav>
        <button className="cart-button" type="button" onClick={() => setCart((value) => value + 1)} aria-label={copy.cart + " " + cart}>{copy.cart} <span>{cart}</span></button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy"><p className="eyebrow">{copy.eyebrow}</p><h1>{copy.heroTitle}<br /><em>{copy.heroAccent}</em></h1><p className="hero-description">{copy.heroText}</p><a className="primary-button" href="#shop">{copy.explore} <span>&gt;</span></a><div className="hero-notes"><span>{copy.made}</span><span>{copy.clear}</span><span>{copy.newFlavor}</span></div></div>
        <div className="hero-art" aria-label="\uac04\uc2dd\uc744 \uba39\uace0 \uc788\ub294 \uac15\uc544\uc9c0 \uc77c\ub7ec\uc2a4\ud2b8" role="img"><div className="sun" /><div className="blob blob-one" /><div className="blob blob-two" /><div className="pet-face"><span className="ear ear-left" /><span className="ear ear-right" /><span className="eye eye-left" /><span className="eye eye-right" /><span className="muzzle" /><span className="nose" /><span className="tongue" /></div><div className="treat treat-one">TREAT</div><div className="treat treat-two">BONE</div><span className="art-caption">\ub9e4\uc77c\uc758 \uc791\uc740 \ud589\ubcf5</span></div>
      </section>

      <section className="trust-row" aria-label="MOMO\uc758 \uc57d\uc18d"><div><strong>4.9/5</strong><span>{copy.rating}</span></div><div><strong>12k+</strong><span>{copy.friends}</span></div><div><strong>100%</strong><span>{copy.ingredients}</span></div><p>{copy.trust}</p></section>

      <section className="shop-section" id="shop"><div className="section-heading"><div><p className="eyebrow">FIND YOUR FAVORITE</p><h2>{copy.find}<br /><span>{copy.findAccent}</span></h2></div><p className="section-note">{copy.browse}</p></div><div className="category-tabs" role="tablist" aria-label="\uac04\uc2dd \uce74\ud14c\uace0\ub9ac">{categories.map((item) => <button key={item} type="button" role="tab" aria-selected={category === item} className={category === item ? "active" : ""} onClick={() => setCategory(item)}>{item}</button>)}</div><div className="product-grid">{visibleProducts.map((product) => <article className="product-card" key={product.name}><div className={"product-art " + product.tone}><span>{product.icon}</span><small>MOMO</small></div><div className="product-info"><div className="product-meta"><span>{product.pet}</span><span>\ud3c9\uc810 4.9</span></div><h3>{product.name}</h3><p>{product.sales}</p><div className="product-buy"><strong>{product.price.toLocaleString()}\uc6d0</strong><button type="button" onClick={() => setCart((value) => value + 1)} aria-label={product.name + " \uc7a5\ubc14\uad6c\ub2c8\uc5d0 \ub2f4\uae30"}>+</button></div></div></article>)}</div></section>

      <section className="story-section" id="story"><div className="story-card"><p className="eyebrow">WHY MOMO</p><h2>{copy.why}</h2><p>{copy.storyText}</p><a href="#guide">{copy.standards} <span>&gt;</span></a></div><div className="story-stamp">made<br />with<br /><b>love</b></div></section>

      <section className="guide-section" id="guide"><p className="eyebrow">MOMO GUIDE</p><h2>{copy.guideTitle}</h2><div className="guide-grid"><div><span>01</span><h3>{copy.guide1}</h3><p>{copy.guideText1}</p><a href="#guide">{copy.read} &gt;</a></div><div><span>02</span><h3>{copy.guide2}</h3><p>{copy.guideText2}</p><a href="#guide">{copy.read} &gt;</a></div><div><span>03</span><h3>{copy.guide3}</h3><p>{copy.guideText3}</p><a href="#guide">{copy.read} &gt;</a></div></div></section>

      <footer><a className="brand" href="#top"><span className="brand-mark">M</span><span>MOMO</span></a><p>{copy.footer}</p><span>2026 MOMO PET TREATS</span></footer>
    </main>
  );
}

