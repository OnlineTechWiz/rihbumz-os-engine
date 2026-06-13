:root{
  --bg:#030503;
  --panel:rgba(10,16,12,.72);
  --line:rgba(137,255,136,.16);
  --text:#f5fbf5;
  --muted:#a1b3a4;
  --green:#87ff8e;
  --green2:#33cf68;
  --gold:#d8b96c;
}

*{
  box-sizing:border-box;
}

html{
  scroll-behavior:smooth;
}

body{
  margin:0;
  font-family:Inter,system-ui,-apple-system,Segoe UI,Arial,sans-serif;
  color:var(--text);

  background:
    radial-gradient(circle at top, #102016 0, #030503 58%),
    linear-gradient(180deg,#071009,#030503);

  overflow-x:hidden;
}

a{
  text-decoration:none;
  color:inherit;
}

.page{
  max-width:1240px;
  margin:0 auto;
  padding:20px;
}

/* NAVBAR */

.nav{
  position:sticky;
  top:16px;
  z-index:20;

  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:16px;

  padding:14px 18px;

  background:rgba(8,12,9,.74);

  border:1px solid var(--line);
  border-radius:18px;

  backdrop-filter:blur(16px);

  margin-bottom:22px;
}

.brand{
  display:flex;
  align-items:center;
  gap:10px;

  font-weight:800;
  letter-spacing:.03em;
}

.brand-dot{
  width:12px;
  height:12px;
  border-radius:50%;

  background:linear-gradient(
    135deg,
    var(--green),
    var(--gold)
  );

  box-shadow:0 0 18px rgba(135,255,142,.45);
}

.nav-links{
  display:flex;
  gap:18px;
  flex-wrap:wrap;

  color:var(--muted);
}

/* BUTTONS */

.nav-cta,
.btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;

  padding:12px 18px;

  border-radius:14px;

  font-weight:800;

  border:1px solid var(--line);

  transition:.25s ease;
}

.nav-cta,
.primary{
  background:linear-gradient(
    135deg,
    var(--green),
    var(--green2)
  );

  color:#041007;

  border-color:transparent;
}

.secondary{
  background:rgba(255,255,255,.02);
}

.btn:hover,
.nav-cta:hover{
  transform:translateY(-3px);
}

/* HERO */

.hero{
  display:grid;
  grid-template-columns:1fr 1.1fr;
  gap:24px;

  align-items:center;

  min-height:72vh;
}

.hero-copy h1{
  font-size:clamp(2.8rem,7vw,6rem);

  line-height:.92;

  margin:.12em 0 .18em;

  letter-spacing:-.05em;

  max-width:8ch;
}

.eyebrow{
  color:var(--green);

  text-transform:uppercase;

  letter-spacing:.22em;

  font-size:.76rem;

  font-weight:800;

  margin:0;
}

.subcopy{
  max-width:54ch;

  color:var(--muted);

  font-size:1.05rem;

  line-height:1.7;

  margin:0 0 24px;
}

.hero-actions{
  display:flex;
  flex-wrap:wrap;
  gap:12px;
}

/* IMAGE */

.visual img{
  width:100%;
  height:auto;

  display:block;

  border-radius:22px;

  box-shadow:0 22px 90px rgba(0,0,0,.42);

  border:1px solid var(--line);
}

/* STORY CARDS */

.story-nav{
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:16px;

  margin:20px 0;
}

.story-tile{
  background:var(--panel);

  border:1px solid var(--line);

  border-radius:22px;

  padding:22px;

  display:block;

  transition:.25s ease;
}

.story-tile:hover{
  transform:translateY(-4px);

  border-color:rgba(135,255,142,.32);
}

.story-tile span,
.mini{
  color:var(--green);

  font-weight:800;

  letter-spacing:.18em;

  font-size:.76rem;

  text-transform:uppercase;
}

.story-tile h2{
  margin:10px 0 8px;

  font-size:1.2rem;
}

.story-tile p,
.bottom-cta p{
  margin:0;

  color:var(--muted);

  line-height:1.65;
}

/* BOTTOM CTA */

.bottom-cta{
  background:var(--panel);

  border:1px solid var(--line);

  border-radius:24px;

  padding:24px;

  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:20px;
}

.bottom-cta h2{
  margin:8px 0 10px;

  font-size:clamp(1.8rem,4vw,2.8rem);

  line-height:1.05;

  max-width:14ch;
}

/* REVEAL EFFECT */

.reveal{
  opacity:0;
  transform:translateY(18px);

  transition:
    opacity .7s ease,
    transform .7s ease;
}

.reveal.in{
  opacity:1;
  transform:translateY(0);
}

/* CTA EFFECT */

.cta.pulse{
  transform:scale(.98);

  box-shadow:0 0 0 8px rgba(31,163,74,.12);
}

/* MOBILE */

@media (max-width:900px){

  .hero,
  .story-nav{
    grid-template-columns:1fr;
  }

  .nav{
    flex-direction:column;
    align-items:stretch;
  }

  .nav-links{
    justify-content:flex-start;
  }

  .bottom-cta{
    flex-direction:column;
    align-items:flex-start;
  }

  .hero-copy h1{
    max-width:100%;
  }

  .page{
    padding:16px;
  }

  .btn,
  .nav-cta{
    width:100%;
  }

}