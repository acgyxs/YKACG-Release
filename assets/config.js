window.YKACG_CONFIG = {
  releaseDomain: "ykacg.net",
  mainSite: {
    title: "进入鸢空ACG",
    subtitle: "www.ykacg.com · 官方主站",
    url: "https://www.ykacg.com/"
  },
  backups: [
    { domain: "ykacg.cc", label: "备用线路 01", url: "https://ykacg.cc/" },
    { domain: "ykacg.top", label: "备用线路 02", url: "https://ykacg.top/" },
    { domain: "ykacg.vip", label: "备用线路 03", url: "https://ykacg.vip/" }
  ],
  links: {
    app: {
      title: "APP下载",
      subtitle: "鸢空ACG 1.0.2 · Android",
      url: "https://app.ykacg.com/%E9%B8%A2%E7%A9%BAACG%20V1.0.2/YKACG_1.0.2.apk"
    },
    group: {
      title: "加入群聊",
      subtitle: "QQ群 / 最新通知",
      url: "https://qm.qq.com/q/asuinwSixq"
    },
    contact: {
      title: "联系站长",
      subtitle: "Telegram：@ykacg",
      url: "https://t.me/ykacg"
    }
  }
};

// 主站按钮尺寸微调：保持横向宽度，压缩高度和内部元素尺寸。
(() => {
  const style = document.createElement("style");
  style.textContent = `
    .main-card {
      min-height: 96px !important;
      margin-top: 18px !important;
      padding: 14px 18px !important;
      grid-template-columns: 56px 1fr 20px !important;
      gap: 12px !important;
      border-radius: 24px !important;
    }

    .main-icon {
      width: 50px !important;
      height: 50px !important;
      font-size: 30px !important;
    }

    .main-copy {
      gap: 5px !important;
    }

    .main-copy strong {
      font-size: 22px !important;
      line-height: 1.12 !important;
    }

    .main-copy small {
      font-size: 13px !important;
    }

    .main-chevron {
      font-size: 38px !important;
    }

    @media (max-width: 390px) {
      .main-card {
        min-height: 88px !important;
        padding: 12px 14px !important;
        grid-template-columns: 50px 1fr 18px !important;
        gap: 10px !important;
        border-radius: 22px !important;
      }

      .main-icon {
        width: 44px !important;
        height: 44px !important;
        font-size: 27px !important;
      }

      .main-copy strong {
        font-size: 19px !important;
      }

      .main-copy small {
        font-size: 12px !important;
      }

      .main-chevron {
        font-size: 34px !important;
      }
    }
  `;
  document.head.appendChild(style);
})();
