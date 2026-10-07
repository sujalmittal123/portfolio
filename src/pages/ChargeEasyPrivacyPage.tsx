import { Link } from "react-router-dom";
import chargeEasyLogo from "../assets/charge-easy.png";

export default function ChargeEasyPrivacyPage() {
  const lastUpdated = "October 7, 2026";
  const developerEmail = "sujalmittal720@gmail.com";
  const githubRepo = "https://github.com/sujalmittal123/chargeeasy";

  return (
    <section className="pt-28 pb-20 min-h-screen">
      <div className="w-full max-w-4xl mx-auto px-6 md:px-10 space-y-10">
        {/* Navigation breadcrumb */}
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>

          <a
            href="/charge-easy-privacy.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono px-3 py-1.5 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-zinc-900 dark:hover:border-zinc-100 transition-colors"
            title="Static HTML version for Google Play Store compliance"
          >
            Plain HTML Version ↗
          </a>
        </div>

        {/* Hero Header */}
        <header className="rounded-3xl border border-zinc-300/70 dark:border-zinc-700/70 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <img
              src={chargeEasyLogo}
              alt="Charge Easy App Icon"
              className="w-20 h-20 rounded-2xl object-cover ring-2 ring-emerald-500/40 shadow-lg shadow-emerald-500/10 flex-shrink-0"
            />
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                100% Offline · Zero Data Collection
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white">
                Privacy Policy
              </h1>
              <p className="text-base text-zinc-600 dark:text-zinc-400">
                Application: <span className="font-semibold text-zinc-900 dark:text-zinc-200">Charge Easy (Charge Tracker)</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-400">
            <div>
              <p className="text-zinc-400 dark:text-zinc-500 uppercase tracking-wider text-[10px]">Package</p>
              <p className="font-mono text-zinc-800 dark:text-zinc-200 mt-0.5">chargetracker.app</p>
            </div>
            <div>
              <p className="text-zinc-400 dark:text-zinc-500 uppercase tracking-wider text-[10px]">Internet Access</p>
              <p className="font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">NONE (0 kB)</p>
            </div>
            <div>
              <p className="text-zinc-400 dark:text-zinc-500 uppercase tracking-wider text-[10px]">Analytics / Ads</p>
              <p className="font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">ZERO</p>
            </div>
            <div>
              <p className="text-zinc-400 dark:text-zinc-500 uppercase tracking-wider text-[10px]">Effective Date</p>
              <p className="text-zinc-800 dark:text-zinc-200 mt-0.5">{lastUpdated}</p>
            </div>
          </div>
        </header>

        {/* Quick Highlights Card */}
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5 space-y-2">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Summary in Plain English
          </h2>
          <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
            <strong>Charge Easy</strong> is engineered as a <strong>100% offline, privacy-first utility</strong>.
            The app <strong>does not possess the Android Internet permission</strong> (<code>android.permission.INTERNET</code> is excluded from the build manifest).
            It cannot transmit your data over the internet, does not use any cloud servers, does not contain tracking SDKs, and will never sell or share your telemetry with anyone.
          </p>
        </div>

        {/* Detailed Sections */}
        <div className="rounded-3xl border border-zinc-300/70 dark:border-zinc-700/70 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl p-6 sm:p-10 space-y-10 text-zinc-800 dark:text-zinc-200 leading-relaxed">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <span className="text-emerald-500">1.</span> Information We Collect
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
              <strong>We do NOT collect any personally identifiable information (PII).</strong>
            </p>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
              Charge Easy does not collect names, email addresses, phone numbers, contact lists, GPS locations, IP addresses, advertising identifiers (AAID), or hardware serial numbers.
            </p>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
              The application only reads local, anonymous battery telemetry from Android hardware sensors:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
              <li>Instantaneous electrical current (<span className="font-mono text-xs">CURRENT_NOW</span> in mA)</li>
              <li>Battery voltage and thermal temperature readings in °C</li>
              <li>Battery charge percentage, charging status (charging, discharging, full), and plug type (AC, USB, Wireless)</li>
              <li>Battery technology and manufacturer capacity counter</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <span className="text-emerald-500">2.</span> Zero Network Access Guarantee
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
              Unlike traditional apps that claim privacy but maintain background internet connections, Charge Easy is architected with zero network capability:
            </p>
            <div className="rounded-xl bg-zinc-100 dark:bg-zinc-800/80 p-4 font-mono text-xs text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700">
              &lt;!-- Notice: android.permission.INTERNET is completely absent --&gt;<br />
              &lt;!-- The Android OS prevents the app from creating any network sockets. --&gt;
            </div>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
              Because the app cannot establish outbound network connections, it is technically impossible for the app to transmit telemetry or stored logs to any remote server, third party, or cloud service.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <span className="text-emerald-500">3.</span> Local Data Storage & Sandboxing
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
              All charging session logs, thermal snapshots, and calculated cycle counters are stored exclusively inside your device's private SQLite sandbox:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
              <li>File: <code className="font-mono text-xs">chargetracker_db.sqlite</code></li>
              <li>Location: Private internal app directory (isolated from other apps by the Android operating system sandbox).</li>
              <li>Data is never backed up to third-party clouds unless you explicitly back up your entire phone through standard Android OS system backups.</li>
              <li>When you export reports as PDF or CSV, the files are generated directly on your device and handed to the system share dialog under your explicit control.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <span className="text-emerald-500">4.</span> Android Permissions & Justifications
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
              In accordance with Google Play Developer Policies, here is an explicit itemization of every permission declared by Charge Easy:
            </p>

            <div className="space-y-3">
              <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 bg-zinc-50/50 dark:bg-zinc-800/40">
                <p className="font-mono text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                  android.permission.FOREGROUND_SERVICE & FOREGROUND_SERVICE_DATA_SYNC
                </p>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  <strong>Purpose:</strong> Allows the background recording service to log battery charging telemetry every 5 seconds while your phone is plugged in, even when the screen is turned off or locked.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 bg-zinc-50/50 dark:bg-zinc-800/40">
                <p className="font-mono text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                  android.permission.WAKE_LOCK
                </p>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  <strong>Purpose:</strong> Holds a partial wake lock solely during active charging sessions to prevent the Android CPU from entering deep sleep, ensuring accurate wattage curve plotting.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 bg-zinc-50/50 dark:bg-zinc-800/40">
                <p className="font-mono text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                  android.permission.RECEIVE_BOOT_COMPLETED
                </p>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  <strong>Purpose:</strong> Allows the app to detect if the device was rebooted while still connected to a charger so it can seamlessly resume session tracking.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 bg-zinc-50/50 dark:bg-zinc-800/40">
                <p className="font-mono text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                  android.permission.POST_NOTIFICATIONS
                </p>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  <strong>Purpose:</strong> Displays ongoing charging status notifications (voltage, wattage, temperature) and alerts you when your configured charge threshold (e.g. 80%) has been reached.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 bg-zinc-50/50 dark:bg-zinc-800/40">
                <p className="font-mono text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                  android.permission.VIBRATE
                </p>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  <strong>Purpose:</strong> Triggers haptic vibration when charge alarms or anti-theft disconnection guard alarms sound.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 bg-zinc-50/50 dark:bg-zinc-800/40">
                <p className="font-mono text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                  android.permission.SCHEDULE_EXACT_ALARM
                </p>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  <strong>Purpose:</strong> Required to schedule exact, time-critical disconnection guard alarm timers.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <span className="text-emerald-500">5.</span> Third-Party Services & Trackers
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
              Charge Easy contains <strong>ZERO third-party analytics libraries, advertising frameworks, or telemetry trackers</strong>.
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
              <li>No Google Analytics / Firebase Analytics</li>
              <li>No Google AdMob or advertising SDKs</li>
              <li>No Crashlytics or external crash logging pipelines</li>
              <li>No Facebook SDK or social trackers</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <span className="text-emerald-500">6.</span> Data Retention & User Control
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
              You maintain 100% control over all data stored on your device:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
              <li>
                <strong>Clearing History:</strong> You can clear individual charging sessions or reset the entire telemetry database directly from the in-app settings.
              </li>
              <li>
                <strong>Uninstalling the App:</strong> Uninstalling Charge Easy permanently deletes the SQLite database and all historical logs from your device storage.
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <span className="text-emerald-500">7.</span> Children's Online Privacy Protection (COPPA)
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
              Our application does not address anyone under the age of 13. We do not knowingly collect personal information from children because the application collects no personal information whatsoever from any user.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <span className="text-emerald-500">8.</span> Policy Updates
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
              We may update our Privacy Policy periodically. Since the application does not have internet access or user accounts, any revisions will be published directly to this public web page with an updated effective date.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <span className="text-emerald-500">9.</span> Developer Contact & Open Source
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
              If you have any questions or feedback regarding this Privacy Policy or Charge Easy's offline security design, feel free to contact:
            </p>
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-800/40 p-4 space-y-2 text-sm">
              <p>
                <strong>Developer:</strong> Sujal Agarwal
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href={`mailto:${developerEmail}`}
                  className="text-emerald-600 dark:text-emerald-400 hover:underline font-mono"
                >
                  {developerEmail}
                </a>
              </p>
              <p>
                <strong>Source Repository:</strong>{" "}
                <a
                  href={githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 dark:text-emerald-400 hover:underline font-mono"
                >
                  {githubRepo}
                </a>
              </p>
            </div>
          </section>
        </div>

        {/* Play Console Copy Box */}
        <div className="rounded-2xl border border-zinc-300/80 dark:border-zinc-700/80 bg-zinc-100/70 dark:bg-zinc-900/60 p-5 space-y-3">
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
            For Google Play Console Submission
          </p>
          <p className="text-xs text-zinc-600 dark:text-zinc-400">
            Use either of these public URLs when filling out the <em>App content → Privacy policy</em> field in the Google Play Console:
          </p>
          <div className="space-y-2 font-mono text-xs">
            <div className="p-2.5 rounded-lg bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-2 overflow-x-auto">
              <span className="text-zinc-800 dark:text-zinc-200 select-all">
                https://sujalmittal123.github.io/portfolio/privacy/charge-easy
              </span>
              <span className="text-[10px] text-zinc-400 font-sans uppercase">React Route</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-2 overflow-x-auto">
              <span className="text-zinc-800 dark:text-zinc-200 select-all">
                https://sujalmittal123.github.io/portfolio/charge-easy-privacy.html
              </span>
              <span className="text-[10px] text-zinc-400 font-sans uppercase">Direct HTML</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
