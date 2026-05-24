// ══ DATA ════════════════════════════════════════════════════════
const SERVICES = [
  { id:1,  name:'Historia Clínica Electrónica',   type:'Clínico',        status:'ok',   uptime:99.8,
    events:[{date:'2026-05-10',desc:'Actualización de módulo de diagnósticos completada.'},{date:'2026-04-28',desc:'Mantenimiento programado finalizado sin incidencias.'}]},
  { id:2,  name:'Sistema de Laboratorio (LIS)',    type:'Clínico',        status:'ok',   uptime:99.4,
    events:[{date:'2026-05-15',desc:'Integración con analizadores completada.'}]},
  { id:3,  name:'PACS / Imágenes Diagnósticas',    type:'Clínico',        status:'warn', uptime:97.1,
    events:[{date:'2026-05-21',desc:'Latencia elevada en consultas de estudios radiológicos.'},{date:'2026-05-19',desc:'Se incrementó capacidad de almacenamiento. Monitoreo activo.'}]},
  { id:4,  name:'Farmacia — Dispensación',          type:'Clínico',        status:'ok',   uptime:99.9,
    events:[{date:'2026-05-01',desc:'Sin eventos relevantes en el período.'}]},
  { id:5,  name:'Urgencias — Triage Digital',      type:'Clínico',        status:'ok',   uptime:100,
    events:[{date:'2026-05-20',desc:'Módulo de triage actualizado a v2.3.'}]},
  { id:6,  name:'Cirugía — Prog. Quirúrgica',      type:'Clínico',        status:'ok',   uptime:98.7,
    events:[{date:'2026-05-12',desc:'Sincronización con historia clínica verificada.'}]},
  { id:7,  name:'Facturación y Cartera',            type:'Administrativo', status:'err',  uptime:92.3,
    events:[{date:'2026-05-22',desc:'Fallo en generación de facturas electrónicas. En revisión.'},{date:'2026-05-20',desc:'Intermitencia reportada. Equipo de soporte notificado.'}]},
  { id:8,  name:'Admisiones y Citas',               type:'Administrativo', status:'ok',   uptime:99.2,
    events:[{date:'2026-05-08',desc:'Migración de datos de pacientes completada.'}]},
  { id:9,  name:'Gestión de Inventarios',           type:'Administrativo', status:'ok',   uptime:98.5,
    events:[{date:'2026-05-14',desc:'Inventario de insumos quirúrgicos sincronizado.'}]},
  { id:10, name:'Nómina y Recursos Humanos',        type:'Administrativo', status:'ok',   uptime:99.6,
    events:[{date:'2026-05-05',desc:'Liquidación del período sin novedades.'}]},
  { id:11, name:'Red Interna (LAN)',                type:'Infraestructura',status:'ok',   uptime:99.9,
    events:[{date:'2026-04-30',desc:'Reconfiguración de VLANs completada.'}]},
  { id:12, name:'Conectividad Internet',            type:'Infraestructura',status:'ok',   uptime:99.5,
    events:[{date:'2026-05-18',desc:'Enlace de respaldo activado 12 min. Recuperado.'}]},
  { id:13, name:'Servidores de Aplicación',         type:'Infraestructura',status:'warn', uptime:96.8,
    events:[{date:'2026-05-22',desc:'CPU principal al 87%. Escala pendiente.'},{date:'2026-05-20',desc:'Actualización de SO programada para el fin de semana.'}]},
  { id:14, name:'Almacenamiento / Backup',          type:'Infraestructura',status:'ok',   uptime:99.7,
    events:[{date:'2026-05-16',desc:'Backup completo ejecutado exitosamente.'}]},
  { id:15, name:'Directorio Activo / LDAP',         type:'Infraestructura',status:'ok',   uptime:99.9,
    events:[{date:'2026-05-03',desc:'Sincronización con sistema de citas verificada.'}]},
  { id:16, name:'Telemedicina',                     type:'Comunicaciones', status:'ok',   uptime:98.2,
    events:[{date:'2026-05-17',desc:'Plataforma de videoconsulta actualizada.'}]},
  { id:17, name:'Correo Institucional',             type:'Comunicaciones', status:'ok',   uptime:99.8,
    events:[{date:'2026-05-01',desc:'Sin incidencias reportadas.'}]},
  { id:18, name:'Comunicación Interna (Chat)',      type:'Comunicaciones', status:'ok',   uptime:99.1,
    events:[{date:'2026-05-19',desc:'Migración de mensajes archivados completada.'}]},
  { id:19, name:'Firewall / IDS',                   type:'Seguridad',      status:'ok',   uptime:100,
    events:[{date:'2026-05-11',desc:'Reglas actualizadas. Sin amenazas detectadas.'}]},
  { id:20, name:'Antivirus Corporativo',            type:'Seguridad',      status:'ok',   uptime:99.9,
    events:[{date:'2026-05-22',desc:'Definiciones de virus actualizadas correctamente.'}]},
  { id:21, name:'VPN Acceso Remoto',                type:'Seguridad',      status:'warn', uptime:95.4,
    events:[{date:'2026-05-21',desc:'Capacidad de conexiones concurrentes al límite. Ampliación en proceso.'}]},
];

const INCIDENTS = [
  { date:'2026-05-22', items:[
    { title:'Fallo en facturación electrónica', service:'Facturación y Cartera', status:'ongoing',
      updates:[
        {time:'09:14', label:'Investigando', body:'El módulo de facturas electrónicas presenta errores al emitir documentos equivalentes. Proveedor notificado.'},
        {time:'10:30', label:'Identificado',  body:'Incompatibilidad con la última actualización del servicio de firma digital. Se habilitó proceso manual transitorio.'}
      ]}
  ]},
  { date:'2026-05-21', items:[
    { title:'Latencia en PACS — Imágenes Diagnósticas', service:'PACS / Imágenes Diagnósticas', status:'ongoing',
      updates:[
        {time:'14:32', label:'Investigando', body:'Lentitud al recuperar estudios radiológicos de alta resolución.'},
        {time:'16:05', label:'Monitoreo',    body:'Equipo de infraestructura optimizando el canal de almacenamiento. Acceso disponible con demora.'}
      ]}
  ]},
  { date:'2026-05-20', items:[] },
  { date:'2026-05-19', items:[] },
  { date:'2026-05-18', items:[
    { title:'Enlace de internet principal caído', service:'Conectividad Internet', status:'resolved',
      updates:[
        {time:'03:20', label:'Investigando', body:'Enlace primario sin respuesta. Sistema de balanceo activó enlace de respaldo automáticamente.'},
        {time:'03:32', label:'Resuelto',     body:'Enlace primario restaurado. Duración: 12 minutos. Sin pérdida de datos.'}
      ]}
  ]},
  // ── HISTORIAL ANTIGUO ──
  { date:'2026-05-17', items:[], old:true },
  { date:'2026-05-16', items:[], old:true },
  { date:'2026-05-15', items:[], old:true },
  { date:'2026-05-14', items:[], old:true },
  { date:'2026-05-13', items:[], old:true },
  { date:'2026-05-12', items:[], old:true },
  { date:'2026-05-11', items:[], old:true },
  { date:'2026-05-10', items:[], old:true },
  { date:'2026-05-09', items:[], old:true },
  { date:'2026-05-08', items:[], old:true },
  { date:'2026-05-07', items:[], old:true },
  { date:'2026-05-06', items:[], old:true },
  { date:'2026-05-05', items:[], old:true },
  { date:'2026-05-04', items:[], old:true },
  { date:'2026-05-03', items:[], old:true },
  { date:'2026-05-02', items:[], old:true },
  { date:'2026-05-01', items:[], old:true },
  { date:'2026-04-30', items:[], old:true },
  { date:'2026-04-29', items:[], old:true },
  { date:'2026-04-28', items:[
    { title:'Mantenimiento programado — Historia Clínica', service:'Historia Clínica Electrónica', status:'resolved',
      updates:[
        {time:'22:00', label:'Mantenimiento', body:'Ventana de mantenimiento iniciada. Actualización del motor de base de datos.'},
        {time:'02:00', label:'Resuelto',      body:'4 horas ejecutadas con éxito. Parches instalados. Sin impacto clínico.'}
      ]}
  ], old:true },
  { date:'2026-04-27', items:[], old:true },
  { date:'2026-04-26', items:[], old:true },
  { date:'2026-04-25', items:[], old:true },
];

// ══ HELPERS ═════════════════════════════════════════════════════
let _currentServiceId = null;

function statusLabel(s) {
  return s === 'ok' ? 'Operativo' : s === 'warn' ? 'Advertencia' : 'Error';
}

function buildUptimeBar(uptime) {
  let html = '<div class="uptime-bar">';
  for (let i = 0; i < 30; i++) {
    const r = Math.random();
    let c = uptime >= 99.5 ? (r < .98 ? '#14b870' : '#f0a500')
           : uptime >= 97   ? (r < .97 ? '#14b870' : r < .99 ? '#f0a500' : '#e8253a')
           :                   (r < .93 ? '#14b870' : r < .97 ? '#f0a500' : '#e8253a');
    html += `<div class="u-seg" style="background:${c};opacity:.8;"></div>`;
  }
  return html + '</div>';
}

function fmtDate(str) {
  const [y,m,d] = str.split('-').map(Number);
  return new Date(y,m-1,d).toLocaleDateString('es-CO',{weekday:'long',year:'numeric',month:'long',day:'numeric'})
    .replace(/^\w/,c=>c.toUpperCase());
}

// ══ PAGE NAVIGATION ═════════════════════════════════════════════
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  const nb = document.getElementById('nav-' + name);
  if (nb) nb.classList.add('active');
  window.scrollTo({top:0, behavior:'smooth'});
}

// ══ RENDER MAIN ═════════════════════════════════════════════════
function renderMain() {
  const ok    = SERVICES.filter(s=>s.status==='ok').length;
  const warn  = SERVICES.filter(s=>s.status==='warn').length;
  const err   = SERVICES.filter(s=>s.status==='err').length;
  const total = SERVICES.length;
  const uptime= (SERVICES.reduce((a,s)=>a+s.uptime,0)/total).toFixed(1);

  document.getElementById('mOk').textContent    = ok;
  document.getElementById('mWarn').textContent  = warn;
  document.getElementById('mErr').textContent   = err;
  document.getElementById('mTotal').textContent = total;
  document.getElementById('mUptime').textContent= uptime+'%';
  document.getElementById('svcCount').textContent= total + ' servicios';

  // Global status
  const gs = document.getElementById('globalStatus');
  const gt = document.getElementById('globalStatusText');
  if (err > 0) {
    gs.className = 'global-status down';
    gt.textContent = `${err} servicio${err>1?'s':''} con error`;
  } else if (warn > 0) {
    gs.className = 'global-status degraded';
    gt.textContent = `${warn} servicio${warn>1?'s':''} en advertencia`;
  } else {
    gs.className = 'global-status';
    gt.textContent = 'Todos los sistemas operativos';
  }

  // Services list
  document.getElementById('serviceList').innerHTML = SERVICES.map(s => `
    <div class="service-row" onclick="openModal(${s.id})">
      <div class="s-dot ${s.status}"></div>
      <span class="s-name">${s.name}</span>
      <span class="s-type">${s.type}</span>
      ${buildUptimeBar(s.uptime)}
      <span class="chip ${s.status}">${statusLabel(s.status)}</span>
      <span class="s-arrow">›</span>
    </div>`).join('');
}

// ══ RENDER HISTORY ══════════════════════════════════════════════
function renderIncidentDay(day) {
  let html = `<div class="history-day"><div class="hd-header">
    <span class="hd-date">${fmtDate(day.date)}</span>`;
  if (!day.items.length) {
    html += `<div class="hd-line"></div><span class="hd-ok">✓ Sin incidentes</span>`;
  }
  html += `</div>`;
  day.items.forEach(inc => {
    html += `<div class="inc-block ${inc.status}">
      <div class="inc-top">
        <span class="inc-title">${inc.title}</span>
        <span class="inc-tag ${inc.status}">${inc.status==='resolved'?'✓ Resuelto':'⚠ En curso'}</span>
      </div>
      <span class="inc-svc">${inc.service}</span>`;
    inc.updates.forEach(u => {
      html += `<div class="inc-update">
        <span class="upd-time">${u.time}</span>
        <span class="upd-body"><span class="upd-lbl">${u.label} — </span>${u.body}</span>
      </div>`;
    });
    html += `</div>`;
  });
  return html + `</div>`;
}

function renderHistory() {
  const recent = INCIDENTS.filter(d=>!d.old);
  const old    = INCIDENTS.filter(d=>d.old);
  document.getElementById('incidentList').innerHTML = recent.map(renderIncidentDay).join('');
  document.getElementById('incidentListOld').innerHTML =
    `<div style="border-top:1px solid var(--border);margin-top:8px;padding-top:8px;">` +
    old.map(renderIncidentDay).join('') + `</div>`;
}

let histExpanded = false;
function toggleHistory() {
  histExpanded = !histExpanded;
  document.getElementById('incidentListOld').classList.toggle('history-hidden', !histExpanded);
  document.getElementById('histBtnIcon').textContent = histExpanded ? '↑' : '↓';
  document.getElementById('histBtnText').textContent = histExpanded ? 'Ocultar historial' : 'Ver historial completo';
  if (histExpanded) document.getElementById('incidentListOld').scrollIntoView({behavior:'smooth',block:'start'});
}

// ══ DETAIL PAGE ═════════════════════════════════════════════════
function openDetail(id) {
  const s = SERVICES.find(x=>x.id===id);
  if (!s) return;
  _currentServiceId = id;

  document.getElementById('dName').textContent  = s.name;
  document.getElementById('dType').textContent  = s.type;
  document.getElementById('dUptime').textContent = s.uptime + '%';
  document.getElementById('dEvents').textContent = s.events.length;
  document.getElementById('dLast').textContent   = s.events[0]?.date || '—';

  const ds = document.getElementById('dStatus');
  const dt = document.getElementById('dStatusTxt');
  ds.className = 'global-status' + (s.status==='warn'?' degraded': s.status==='err'?' down':'');
  dt.textContent = statusLabel(s.status);

  document.getElementById('dEventList').innerHTML = s.events.map(e=>`
    <div class="dev-row">
      <span class="dev-date">${e.date}</span>
      <span class="dev-desc">${e.desc}</span>
    </div>`).join('');

  showPage('detail');
}

// ══ MODAL ═══════════════════════════════════════════════════════
function openModal(id) {
  const s = SERVICES.find(x=>x.id===id);
  if (!s) return;
  _currentServiceId = id;
  document.getElementById('mTitle').textContent  = s.name;
  document.getElementById('mSub').textContent    = s.type;
  document.getElementById('mStatus').textContent = statusLabel(s.status);
  document.getElementById('mStatus').style.color =
    s.status==='ok'?'var(--ok)':s.status==='warn'?'var(--warn)':'var(--err)';
  document.getElementById('mUptime').textContent = s.uptime+'%';
  document.getElementById('mEvents').innerHTML   = s.events.map(e=>`
    <li class="mev">
      <span class="mev-date">${e.date}</span>
      <span>${e.desc}</span>
    </li>`).join('');
  document.getElementById('modalOverlay').classList.add('open');
}

function openDetailFromModal() {
  closeModalDirect();
  if (_currentServiceId) openDetail(_currentServiceId);
}

function closeModal(e) {
  if (e.target===document.getElementById('modalOverlay')) closeModalDirect();
}

function closeModalDirect() {
  document.getElementById('modalOverlay').classList.remove('open');
}

document.addEventListener('keydown', e => { if(e.key==='Escape') closeModalDirect(); });

// ══ CLOCK ═══════════════════════════════════════════════════════
function updateClock() {
  const t = new Date().toLocaleTimeString('es-CO',{hour:'2-digit',minute:'2-digit',second:'2-digit'});
  document.getElementById('lastUpdate').textContent = t;
  const heroTime = document.getElementById('heroTime');
  if (heroTime) heroTime.textContent = 'Actualizado: ' + t;
}

// ══ INIT ════════════════════════════════════════════════════════
renderMain();
renderHistory();
updateClock();
setInterval(updateClock, 30000);