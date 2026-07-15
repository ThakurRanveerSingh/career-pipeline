(() => {
  "use strict";

  /* ---------------------------------------------------------
     CONFIG — phases, tasks, milestones, counters, tips
  --------------------------------------------------------- */

  const PHASES = [
    { id: "phase1", name: "Position & Prove", start: "2026-07-14", end: "2026-08-13" },
    { id: "phase2", name: "Volume & Visibility", start: "2026-08-14", end: "2026-09-13" },
    { id: "phase3", name: "Convert", start: "2026-09-14", end: "2026-10-12" },
  ];

  const SPRINT_START = PHASES[0].start;
  const SPRINT_END = PHASES[PHASES.length - 1].end;

  const TASKS = {
    phase1: {
      weekday: [
        {
          text: "Refine LinkedIn / resume positioning",
          how: "Rewrite your headline to lead with your Agentic Automation Architect target, not your current title. Add 2–3 quantified automation wins to your About section. Rework resume bullets to lead with business outcome (hours saved, error rate cut, volume handled) before the tool name.",
        },
        {
          text: "Work on GitHub project (Doctor's Guardian — repo / README / demo)",
          how: "Spend 45–60 focused minutes. Pick one: restructure the README (problem → architecture → demo → results), add an architecture diagram, or record a 60-second Loom walkthrough. Ship something visibly better, don't just tidy.",
        },
        {
          text: "Message one former colleague",
          how: "Send one specific, personalized message — reference a shared project or memory, ask how they're doing, then mention you're exploring agentic automation roles. No mass blasts, no generic 'open to work' copy-paste.",
        },
        {
          text: "Learn / practice one job-relevant skill",
          how: "30–45 min. Pick one area and go deep rather than skimming several: Python fundamentals, prompt engineering, a cloud AI service (AWS Bedrock, Azure AI Foundry, GCP Vertex), or agentic framework internals. Rotate topics across the week instead of restarting daily.",
        },
      ],
      weekend: [
        {
          text: "Study Agentic Automation Frameworks & fundamentals of building agentic workflows",
          how: "60–90 minutes with one framework (LangGraph, CrewAI, AutoGen, or similar). Focus on core patterns: planner/executor loops, tool-calling, memory, and human-in-the-loop checkpoints — not just reading docs, try to run something.",
        },
        {
          text: "Draft / publish a LinkedIn post",
          how: "Write 150–300 words about something concrete you built, learned, or struggled with this week. Show the messy middle, not a highlight reel. Publish before the day ends — a draft doesn't count.",
        },
        {
          text: "Shortlist target roles",
          how: "Search LinkedIn and 5–10 target company career pages for open Agentic Automation Architect / adjacent roles. Add each to your tracker with company, link, and a one-line fit note.",
        },
        {
          text: "Learn / practice one job-relevant skill",
          how: "45–60 min, deliberately different from today's framework study above — build breadth, not just depth in one area. Good options: system design fundamentals, cloud AI services, or MLOps/observability basics.",
        },
      ],
    },
    phase2: {
      weekday: [
        {
          text: "Send 2 tailored applications",
          how: "Pick 2 roles from your shortlist. Mirror the job description's exact verbs in your top 3 resume bullets. Apply through the company site when possible — it's slower but converts better than Easy Apply.",
        },
        {
          text: "Send 1 referral message",
          how: "Find one person at a target company (2nd-degree connection, alum, or a targeted LinkedIn search). Write a message they can forward in under 30 seconds — specific ask, one line of context, no essay.",
        },
        {
          text: "Follow up on pending applications",
          how: "Check anything older than 7 days with no response. Send a short, specific note to the recruiter or hiring manager if you have contact info; otherwise a light LinkedIn nudge referencing the role.",
        },
        {
          text: "Learn / practice one job-relevant skill",
          how: "20–30 min given limited time this phase. Prioritize whatever directly helps interviews right now — a system design pattern for agentic architectures, or hands-on practice with a cloud AI service you keep seeing in job descriptions.",
        },
      ],
      weekend: [
        {
          text: "Build on 2–3 projects, end to end",
          how: "Push one project meaningfully closer to demoable — prioritize finishing over starting a fourth. End-to-end beats broad and unfinished.",
        },
        {
          text: "Publish a LinkedIn post",
          how: "Shift content toward what you're actually seeing in the search — a project milestone, an interview lesson, a build decision. Real material now that you have more of it.",
        },
        {
          text: "Interview prep",
          how: "Prep one STAR story or one system-design scenario (agentic architecture: planner, tool-use, memory, guardrails). Say it out loud, don't just write it — the gap between written and spoken is where prep fails.",
        },
        {
          text: "Learn / practice one job-relevant skill",
          how: "45–60 min. Go deeper on whatever gap applications or interviews have surfaced so far — cloud deployment, observability/guardrails, or a specific technical skill a job description kept requiring.",
        },
      ],
    },
    phase3: {
      weekday: [
        {
          text: "Interview prep / follow-up",
          how: "Either prep for your next scheduled interview (research the team, rehearse your 3-sentence agentic-automation narrative) or send a thank-you / follow-up note after a completed round — whichever is due today.",
        },
        {
          text: "Keep pipeline full — 1 application or referral",
          how: "Don't let momentum stall while interviewing. Send at least one new tailored application or referral message today so the pipeline doesn't go cold if a process falls through.",
        },
        {
          text: "Update tracker",
          how: "Log every interview stage, date, and next action. Five minutes, but it's what keeps you from dropping a thread across multiple concurrent processes.",
        },
        {
          text: "Learn / practice one job-relevant skill",
          how: "15–20 min, kept light — interview prep comes first this phase. Use small pockets to reinforce whatever skill is most likely to come up in your next system-design round.",
        },
      ],
      weekend: [
        {
          text: "Mock interview practice",
          how: "Run a full mock loop — behavioral plus a technical/system-design round — with a friend, mentor, or recorded self-practice. Review the recording for filler words and rambling, not just content.",
        },
        {
          text: "Offer / negotiation prep",
          how: "Research comp bands for the role and level (Levels.fyi, Glassdoor, network). Decide your target number and walk-away point before any offer call happens, not during it.",
        },
        {
          text: "Reflective LinkedIn post",
          how: "Share a genuine reflection on the search — a lesson, a pivot, or a milestone. Visibility matters most right now, and authenticity reads better than a polished announcement.",
        },
        {
          text: "Learn / practice one job-relevant skill",
          how: "30–45 min. Focus on whatever an interviewer specifically flagged as a gap, or deepen the one area most likely to differentiate you at Architect level — system design, guardrails/governance, or agentic tool-orchestration patterns.",
        },
      ],
    },
  };

  const MILESTONES = {
    phase1: [
      { id: "m1", text: "Finalize LinkedIn headline & summary positioning" },
      { id: "m2", text: "Publish Doctor's Guardian repo (README + live demo)" },
      { id: "m3", text: "Message 15 former colleagues / connections" },
      { id: "m4", text: "Publish first in-search LinkedIn post" },
    ],
    phase2: [
      { id: "m1", text: "Ship 3 end-to-end portfolio projects" },
      { id: "m2", text: "Cross 40 tailored applications sent" },
      { id: "m3", text: "Land first recruiter / hiring-manager call" },
      { id: "m4", text: "Publish 6 LinkedIn posts total" },
    ],
    phase3: [
      { id: "m1", text: "Land 3 active interview processes" },
      { id: "m2", text: "Complete a full mock interview loop" },
      { id: "m3", text: "Receive first offer" },
      { id: "m4", text: "Negotiate and accept an offer" },
    ],
  };

  const COUNTERS_CONFIG = [
    { id: "applications", label: "APPLICATIONS_SENT", target: 60 },
    { id: "referrals", label: "REFERRAL_MESSAGES_SENT", target: 25 },
    { id: "posts", label: "LINKEDIN_POSTS_PUBLISHED", target: 13 },
  ];

  const TIPS = [
    "Lead your resume bullets with the automation outcome (hours saved, error rate cut), not the tool used.",
    "Reframe RPA work as 'agentic orchestration' when it involved decisioning, not just fixed-path automation.",
    "A recruiter skims a profile in ~6 seconds — put your target title in the headline, not just current title.",
    "Referral messages convert best when you reference a specific project of theirs, not a generic 'open to work'.",
    "Ship the demo, not just the code — a 60-second Loom walkthrough beats a wall of README text.",
    "Tailor each application's top 3 bullets to mirror the job description's exact verbs — ATS and humans both scan for them.",
    "Follow up on applications at day 7, not day 1 — too early reads as impatient, too late reads as uninterested.",
    "LinkedIn posts about a build-in-progress outperform polished announcements — show the messy middle.",
    "In interviews, narrate your agentic design tradeoffs (tool selection, guardrails, human-in-the-loop) — architects are judged on judgment, not code.",
    "Quantify every automation project: volume processed, cycle time reduced, exceptions handled autonomously.",
    "Warm outreach beats cold applications roughly 3:1 — prioritize the referral message before the application form.",
    "Keep a living doc of STAR stories for: a failure you recovered from, a scope negotiation, and a cross-team conflict.",
    "When prepping for a system design round, default to agentic patterns: planner, tool-use, memory, human checkpoint.",
    "Your GitHub README should answer 'why' before 'how' — lead with the problem the project solves.",
    "Comment on 3 posts from people at target companies before DMing them — warm context makes the ask easier.",
    "Negotiate on total comp, not just base — ask for the full breakdown before naming a number.",
    "Batch applications: research and tailor in one sitting, submit in the next — context-switching kills quality.",
    "Track every application in one place with date, contact, and next action — a full pipeline is only useful if it's visible.",
    "Practice explaining agentic vs. deterministic automation in one breath — you'll need that distinction constantly.",
    "A mock interview a week before the real one surfaces filler words and rambling you can't hear in your own head.",
    "Ask every interviewer one specific question about their team's current automation stack — it signals real interest.",
    "When a role goes quiet, a short, specific follow-up rarely hurts and sometimes revives it.",
    "Publish process, not just wins — 'here's what I got wrong building X' gets more genuine engagement than a highlight reel.",
    "Keep your 'why agentic automation' narrative to 3 sentences — you'll repeat it in every screen.",
    "Before a call, re-read the job description and circle the 3 requirements you're weakest on — prep those first.",
    "A referral message should take the other person under 30 seconds to forward — write it for them, not about you.",
    "List measurable business impact before technical stack on every resume bullet — impact gets read first.",
    "When negotiating, silence after stating your number is a tool, not a mistake — let it sit.",
    "Revisit your target-role list monthly — the market moves, and your shortlist should too.",
    "Document one architecture diagram per project — visual artifacts travel further in interviews than prose.",
  ];

  const STORAGE_KEY = "careerPipelineV1";

  /* ---------------------------------------------------------
     DATE HELPERS (local time, no UTC drift)
  --------------------------------------------------------- */

  function pad(n) { return String(n).padStart(2, "0"); }

  function toISO(date) {
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  }

  function fromISO(iso) {
    const [y, m, d] = iso.split("-").map(Number);
    return new Date(y, m - 1, d);
  }

  function todayISO() {
    return toISO(new Date());
  }

  function isWeekend(iso) {
    const day = fromISO(iso).getDay();
    return day === 0 || day === 6;
  }

  function daysBetween(isoA, isoB) {
    const a = fromISO(isoA);
    const b = fromISO(isoB);
    return Math.round((b - a) / 86400000);
  }

  function addDays(iso, n) {
    const d = fromISO(iso);
    d.setDate(d.getDate() + n);
    return toISO(d);
  }

  function formatHuman(iso) {
    const d = fromISO(iso);
    return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" });
  }

  function formatShort(iso) {
    const d = fromISO(iso);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  }

  /* ---------------------------------------------------------
     STORAGE
  --------------------------------------------------------- */

  function loadState() {
    let raw;
    try {
      raw = JSON.parse(localStorage.getItem(STORAGE_KEY));
    } catch (e) {
      raw = null;
    }
    const defaults = {
      dailyLog: {},        // { "2026-07-14": [bool, ...] }, one entry per task shown that day
      milestones: {        // { phase1: { m1: bool, ... }, ... }
        phase1: {}, phase2: {}, phase3: {},
      },
      counters: { applications: 0, referrals: 0, posts: 0 },
      longestStreak: 0,
    };
    if (!raw) return defaults;
    return {
      dailyLog: raw.dailyLog || {},
      milestones: {
        phase1: (raw.milestones && raw.milestones.phase1) || {},
        phase2: (raw.milestones && raw.milestones.phase2) || {},
        phase3: (raw.milestones && raw.milestones.phase3) || {},
      },
      counters: Object.assign({ applications: 0, referrals: 0, posts: 0 }, raw.counters || {}),
      longestStreak: raw.longestStreak || 0,
    };
  }

  let state = loadState();

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  /* ---------------------------------------------------------
     PHASE / TASK LOGIC
  --------------------------------------------------------- */

  function getPhaseForDate(iso) {
    for (const p of PHASES) {
      if (iso >= p.start && iso <= p.end) return p;
    }
    return null;
  }

  function getActivePhase() {
    const today = todayISO();
    const phase = getPhaseForDate(today);
    if (phase) return phase;
    if (today < SPRINT_START) return null; // pre-sprint
    return PHASES[PHASES.length - 1]; // post-sprint, treat last phase as reference
  }

  function getTasksForDate(iso) {
    const phase = getPhaseForDate(iso) || PHASES[0];
    const bucket = isWeekend(iso) ? "weekend" : "weekday";
    return TASKS[phase.id][bucket];
  }

  function getDayLog(iso) {
    if (!state.dailyLog[iso]) {
      const taskCount = getTasksForDate(iso).length;
      state.dailyLog[iso] = new Array(taskCount).fill(false);
    }
    return state.dailyLog[iso];
  }

  function isDayFullyChecked(iso) {
    const log = state.dailyLog[iso];
    if (!log) return false;
    return log.length > 0 && log.every(Boolean);
  }

  /* ---------------------------------------------------------
     STREAK / METRICS
  --------------------------------------------------------- */

  function computeStreaks() {
    const today = todayISO();
    // Walk backward from today (or yesterday if today isn't complete yet) for current streak.
    let cursor = isDayFullyChecked(today) ? today : addDays(today, -1);
    let current = 0;
    // don't walk before sprint start
    while (cursor >= SPRINT_START && isDayFullyChecked(cursor)) {
      current++;
      cursor = addDays(cursor, -1);
    }

    // Longest streak: scan every date that has a log entry, in order, compute max run.
    const dates = Object.keys(state.dailyLog).sort();
    let longest = 0, run = 0, prev = null;
    for (const d of dates) {
      if (!isDayFullyChecked(d)) { run = 0; prev = d; continue; }
      if (prev && daysBetween(prev, d) === 1) {
        run++;
      } else {
        run = 1;
      }
      longest = Math.max(longest, run);
      prev = d;
    }
    longest = Math.max(longest, current);
    return { current, longest };
  }

  function computeTotalTasksCompleted() {
    let total = 0;
    for (const iso of Object.keys(state.dailyLog)) {
      total += state.dailyLog[iso].filter(Boolean).length;
    }
    return total;
  }

  /* ---------------------------------------------------------
     RENDER — PIPELINE DIAGRAM
  --------------------------------------------------------- */

  function renderPipeline() {
    const today = todayISO();
    const diagram = document.getElementById("pipeline-diagram");
    diagram.innerHTML = "";

    PHASES.forEach((p, idx) => {
      let status;
      if (today > p.end) status = "done";
      else if (today >= p.start && today <= p.end) status = "active";
      else status = "upcoming";

      const node = document.createElement("div");
      node.className = `pipe-node ${status}`;
      node.innerHTML = `
        <div class="node-index">NODE_0${idx + 1}</div>
        <div class="node-title">${p.name}</div>
        <div class="node-dates">${formatShort(p.start)} → ${formatShort(p.end)}</div>
        <div class="node-status">${status.toUpperCase()}</div>
      `;
      diagram.appendChild(node);

      if (idx < PHASES.length - 1) {
        const connector = document.createElement("div");
        const flowed = today > p.end;
        connector.className = `pipe-connector${flowed ? " flowed" : ""}`;
        connector.textContent = "→";
        diagram.appendChild(connector);
      }
    });

    const activePhase = getPhaseForDate(today);
    document.getElementById("today-date").textContent = formatHuman(today);

    if (activePhase) {
      document.getElementById("active-phase-name").textContent = activePhase.name;
      const phaseDay = daysBetween(activePhase.start, today) + 1;
      const phaseLen = daysBetween(activePhase.start, activePhase.end) + 1;
      document.getElementById("phase-day").textContent = `${phaseDay} / ${phaseLen}`;
      document.getElementById("phase-days-remaining").textContent = daysBetween(today, activePhase.end);
    } else if (today < SPRINT_START) {
      document.getElementById("active-phase-name").textContent = "Not started";
      document.getElementById("phase-day").textContent = "—";
      document.getElementById("phase-days-remaining").textContent = daysBetween(today, SPRINT_START);
    } else {
      document.getElementById("active-phase-name").textContent = "Sprint complete";
      document.getElementById("phase-day").textContent = "—";
      document.getElementById("phase-days-remaining").textContent = "0";
    }

    document.getElementById("sprint-days-remaining").textContent = Math.max(0, daysBetween(today, SPRINT_END));
  }

  /* ---------------------------------------------------------
     RENDER — DAILY TASKS
  --------------------------------------------------------- */

  const expandedTasks = new Set(); // keys: "<dateISO>-<taskIndex>", session-only

  function renderDailyTasks() {
    const today = todayISO();
    const tasks = getTasksForDate(today);
    const log = getDayLog(today);

    const list = document.getElementById("daily-task-list");
    list.innerHTML = "";

    tasks.forEach((task, i) => {
      const key = `${today}-${i}`;
      const isExpanded = expandedTasks.has(key);

      const li = document.createElement("li");
      li.className = `task-item${log[i] ? " checked" : ""}${isExpanded ? " expanded" : ""}`;
      li.innerHTML = `
        <div class="task-row">
          <span class="task-checkbox">${log[i] ? "✓" : ""}</span>
          <span class="task-text">${task.text}</span>
          <button class="task-expand-btn" aria-label="Toggle how-to detail" type="button">▸</button>
        </div>
        <div class="task-how">${task.how}</div>
      `;

      li.querySelector(".task-row").addEventListener("click", (e) => {
        if (e.target.closest(".task-expand-btn")) return;
        log[i] = !log[i];
        saveState();
        renderDailyTasks();
        renderMetrics();
      });

      li.querySelector(".task-expand-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        if (expandedTasks.has(key)) expandedTasks.delete(key);
        else expandedTasks.add(key);
        renderDailyTasks();
      });

      list.appendChild(li);
    });

    const checkedCount = log.filter(Boolean).length;
    document.getElementById("daily-progress-fill").style.width = `${(checkedCount / tasks.length) * 100}%`;
    document.getElementById("daily-progress-label").textContent = `${checkedCount}/${tasks.length}`;

    const phase = getPhaseForDate(today);
    const bucket = isWeekend(today) ? "WEEKEND" : "WEEKDAY";
    document.getElementById("daily-queue-sub").textContent = phase ? `[${phase.name.toUpperCase()} · ${bucket}]` : "";
  }

  /* ---------------------------------------------------------
     RENDER — METRICS
  --------------------------------------------------------- */

  function renderMetrics() {
    const { current, longest } = computeStreaks();
    document.getElementById("streak-current").textContent = current;
    document.getElementById("streak-longest").textContent = longest;
    document.getElementById("total-tasks").textContent = computeTotalTasksCompleted();

    const today = todayISO();
    const elapsed = Math.min(90, Math.max(0, daysBetween(SPRINT_START, today) + 1));
    document.getElementById("days-elapsed").textContent = `${elapsed}`;
  }

  /* ---------------------------------------------------------
     RENDER — COUNTERS
  --------------------------------------------------------- */

  function renderCounters() {
    const row = document.getElementById("counter-row");
    row.innerHTML = "";

    COUNTERS_CONFIG.forEach(cfg => {
      const value = state.counters[cfg.id] || 0;
      const pct = Math.min(100, (value / cfg.target) * 100);

      const card = document.createElement("div");
      card.className = "counter-card";
      card.innerHTML = `
        <div class="counter-name">${cfg.label}</div>
        <div class="counter-controls">
          <button class="counter-btn" data-action="dec" data-id="${cfg.id}">−</button>
          <span class="counter-value">${value}</span>
          <button class="counter-btn" data-action="inc" data-id="${cfg.id}">+</button>
          <span class="counter-target">/ ${cfg.target} target</span>
        </div>
        <div class="counter-bar"><div class="counter-bar-fill" style="width:${pct}%"></div></div>
      `;
      row.appendChild(card);
    });

    row.querySelectorAll(".counter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        const delta = btn.dataset.action === "inc" ? 1 : -1;
        state.counters[id] = Math.max(0, (state.counters[id] || 0) + delta);
        saveState();
        renderCounters();
      });
    });
  }

  /* ---------------------------------------------------------
     RENDER — MILESTONES
  --------------------------------------------------------- */

  let selectedMilestonePhase = null;

  function renderMilestoneTabs() {
    if (!selectedMilestonePhase) {
      const active = getActivePhase();
      selectedMilestonePhase = active ? active.id : "phase1";
    }
    const tabs = document.getElementById("milestone-tabs");
    tabs.innerHTML = "";

    PHASES.forEach(p => {
      const list = MILESTONES[p.id];
      const checkedCount = list.filter(m => state.milestones[p.id][m.id]).length;
      const tab = document.createElement("div");
      tab.className = `milestone-tab${selectedMilestonePhase === p.id ? " active" : ""}`;
      tab.innerHTML = `${p.name} <span class="tab-count">${checkedCount}/${list.length}</span>`;
      tab.addEventListener("click", () => {
        selectedMilestonePhase = p.id;
        renderMilestoneTabs();
        renderMilestoneList();
      });
      tabs.appendChild(tab);
    });
  }

  function renderMilestoneList() {
    const list = document.getElementById("milestone-list");
    list.innerHTML = "";
    const items = MILESTONES[selectedMilestonePhase];

    items.forEach(m => {
      const checked = !!state.milestones[selectedMilestonePhase][m.id];
      const li = document.createElement("li");
      li.className = `task-item${checked ? " checked" : ""}`;
      li.innerHTML = `<div class="task-row"><span class="task-checkbox">${checked ? "✓" : ""}</span><span class="task-text">${m.text}</span></div>`;
      li.addEventListener("click", () => {
        state.milestones[selectedMilestonePhase][m.id] = !checked;
        saveState();
        renderMilestoneTabs();
        renderMilestoneList();
      });
      list.appendChild(li);
    });
  }

  /* ---------------------------------------------------------
     RENDER — TIP
  --------------------------------------------------------- */

  function renderTip() {
    const today = fromISO(todayISO());
    const dayIndex = Math.floor(today.getTime() / 86400000);
    const tip = TIPS[dayIndex % TIPS.length];
    document.getElementById("tip-text").textContent = tip;
  }

  /* ---------------------------------------------------------
     RESET
  --------------------------------------------------------- */

  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("This will permanently erase all Career Pipeline data stored in this browser. Continue?")) {
      localStorage.removeItem(STORAGE_KEY);
      state = loadState();
      renderAll();
    }
  });

  /* ---------------------------------------------------------
     INIT
  --------------------------------------------------------- */

  function renderAll() {
    renderPipeline();
    renderDailyTasks();
    renderMetrics();
    renderCounters();
    renderMilestoneTabs();
    renderMilestoneList();
    renderTip();
  }

  renderAll();
})();
