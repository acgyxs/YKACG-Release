(() => {
  const cfg = window.YKACG_CONFIG || {};
  const byId = (id) => document.getElementById(id);

  const setText = (id, value) => {
    const el = byId(id);
    if (el && value) el.textContent = value;
  };

  const setupLink = (el, item) => {
    if (!el || !item) return;
    if (item.url) {
      el.href = item.url;
      el.target = "_blank";
      el.rel = "noopener noreferrer";
      el.classList.remove("is-disabled");
    } else {
      el.href = "#";
      el.classList.add("is-disabled");
      el.addEventListener("click", (e) => {
        e.preventDefault();
        showToast("该入口暂未配置");
      });
    }
  };

  const showToast = (message) => {
    const toast = byId("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
  };

  setText("releaseDomain", cfg.releaseDomain || "ykacg.net");

  if (cfg.mainSite) {
    setText("mainTitle", cfg.mainSite.title);
    setText("mainSubtitle", cfg.mainSite.subtitle);
    const mainSite = byId("mainSite");
    if (mainSite && cfg.mainSite.url) mainSite.href = cfg.mainSite.url;
  }

  const backupPanel = byId("backupPanel");
  if (backupPanel) {
    backupPanel.innerHTML = "";
    (cfg.backups || []).forEach((item) => {
      const row = document.createElement("a");
      row.className = "backup-row";
      row.href = item.url || "#";
      if (item.url) {
        row.target = "_blank";
        row.rel = "noopener noreferrer";
      }
      row.innerHTML = `
        <span class="domain-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.92 6h-3.03a15.9 15.9 0 0 0-1.38-3.56A8.04 8.04 0 0 1 18.92 8ZM12 4c.95 1.16 1.7 2.5 2.12 4H9.88A13.82 13.82 0 0 1 12 4ZM4.26 14a8.08 8.08 0 0 1 0-4h3.31a16.9 16.9 0 0 0 0 4H4.26Zm.82 2h3.03c.31 1.28.78 2.49 1.38 3.56A8.04 8.04 0 0 1 5.08 16ZM8.11 8H5.08a8.04 8.04 0 0 1 4.41-3.56A15.9 15.9 0 0 0 8.11 8ZM12 20a13.82 13.82 0 0 1-2.12-4h4.24A13.82 13.82 0 0 1 12 20Zm2.55-6h-5.1a14.7 14.7 0 0 1 0-4h5.1a14.7 14.7 0 0 1 0 4Zm-.04 5.56A15.9 15.9 0 0 0 15.89 16h3.03a8.04 8.04 0 0 1-4.41 3.56ZM16.43 14a16.9 16.9 0 0 0 0-4h3.31a8.08 8.08 0 0 1 0 4h-3.31Z"/></svg>
        </span>
        <span class="domain-copy"><strong>${escapeHtml(item.domain || "")}</strong><small>${escapeHtml(item.label || "备用线路")}</small></span>
        <span class="external-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M14 3h7v7h-2V6.41l-8.29 8.3-1.42-1.42 8.3-8.29H14V3ZM5 5h6v2H5v12h12v-6h2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"/></svg>
        </span>`;
      if (!item.url) {
        row.classList.add("is-disabled");
        row.addEventListener("click", (e) => { e.preventDefault(); showToast("该线路暂未配置"); });
      }
      backupPanel.appendChild(row);
    });
  }

  const linkMap = [
    ["appLink", "appTitle", "appSubtitle", cfg.links && cfg.links.app],
    ["groupLink", "groupTitle", "groupSubtitle", cfg.links && cfg.links.group],
    ["contactLink", "contactTitle", "contactSubtitle", cfg.links && cfg.links.contact]
  ];
  linkMap.forEach(([linkId, titleId, subId, item]) => {
    if (!item) return;
    setText(titleId, item.title);
    setText(subId, item.subtitle);
    setupLink(byId(linkId), item);
  });

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
    }[c]));
  }
})();
