(function () {
  if (sessionStorage.getItem("_pv")) return;
  sessionStorage.setItem("_pv", "1");

  const WEBHOOK =
    "https://discord.com/api/webhooks/1482109647027441834/MYIQRMLIdmwELxcBatbYGm7spz1dkMW3co6OFHzOaWrWlAXpvemhNq3-IqqwmA68HB-v";

  async function notify() {
    let loc = {};
    try {
      const r = await fetch("https://ipapi.co/json/");
      loc = await r.json();
    } catch (_) {}

    const ua = navigator.userAgent;
    const isMobile = /Mobi|Android|iPhone|iPad/i.test(ua);

    const browser = /Edg\//i.test(ua)
      ? "Edge"
      : /OPR\//i.test(ua)
      ? "Opera"
      : /Chrome\//i.test(ua)
      ? "Chrome"
      : /Firefox\//i.test(ua)
      ? "Firefox"
      : /Safari\//i.test(ua)
      ? "Safari"
      : "Unknown";

    const os = /Windows/i.test(ua)
      ? "Windows"
      : /Mac OS/i.test(ua)
      ? "macOS"
      : /Android/i.test(ua)
      ? "Android"
      : /iPhone|iPad/i.test(ua)
      ? "iOS"
      : /Linux/i.test(ua)
      ? "Linux"
      : "Unknown";

    const time = new Date().toLocaleString("en-PH", {
      timeZone: "Asia/Manila",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const referrer = document.referrer
      ? document.referrer.length > 60
        ? document.referrer.slice(0, 57) + "..."
        : document.referrer
      : "Direct";

    await fetch(WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        embeds: [
          {
            title: "👀  New Portfolio Visit",
            color: 0x00ff88,
            fields: [
              {
                name: "🌍 Location",
                value: loc.city
                  ? `${loc.city}, ${loc.country_name}`
                  : "Unknown",
                inline: true,
              },
              { name: "🌐 Browser", value: browser, inline: true },
              {
                name: "💻 Device",
                value: `${isMobile ? "Mobile" : "Desktop"} · ${os}`,
                inline: true,
              },
              { name: "🔗 Referrer", value: referrer, inline: true },
              {
                name: "🖥️ Screen",
                value: `${screen.width}×${screen.height}`,
                inline: true,
              },
              { name: "⏰ Time (PHT)", value: time, inline: true },
            ],
            footer: { text: "brix.dev · portfolio tracker" },
          },
        ],
      }),
    });
  }

  notify().catch(() => {});
})();
