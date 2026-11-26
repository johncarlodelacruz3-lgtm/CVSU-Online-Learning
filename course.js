(function () {
    const id = document.body.dataset.course;
    const c = COURSES[id];
    const N = c.modules.length;
    const KEY = "cvsu-learn-" + id;
    let count = 0; // number of completed modules (modules unlock in order)
    try { count = parseInt(localStorage.getItem(KEY)) || 0; } catch (e) {}
    let cur = Math.min(count, N - 1);

    const $ = (x) => document.getElementById(x);
    const isDone = (i) => i < count;
    const unlocked = (i) => i <= count;
    const complete = () => {
        count = Math.max(count, cur + 1);
        try { localStorage.setItem(KEY, count); } catch (e) {}
    };

    function render() {
        const pct = Math.round((count / N) * 100);
        const m = c.modules[cur];
        const done = isDone(cur);

        $("summary").innerHTML =
            `<div class="sum-top"><div class="sum-icon">${c.icon}</div><div><h1>${c.title}</h1><p>${c.desc}</p></div></div>
             <div class="row"><span>Progress</span><span>${count}/${N} modules</span></div>
             <div class="bar"><div style="width:${pct}%"></div></div>
             <div class="pct">${pct}% Complete</div>`;

        $("modules").innerHTML = `<h2>Course Modules</h2><ul class="mod-list">` +
            c.modules.map((x, i) =>
                `<li class="mod ${isDone(i) ? "done" : ""} ${i === cur ? "active" : ""} ${unlocked(i) ? "" : "locked"}" data-i="${i}">
                    <span class="badge">${isDone(i) ? "✓" : unlocked(i) ? i + 1 : "🔒"}</span>
                    <span><b>${x.title}</b><small>${x.quiz ? "❓ Quiz" : "📄 Text"}</small></span>
                 </li>`).join("") + `</ul>`;

        let body;
        if (m.quiz) {
            body = `<div class="content"><h3>${m.quiz.q}</h3>` +
                m.quiz.options.map((o, j) =>
                    `<label class="opt ${done && j === m.quiz.answer ? "right" : ""}">
                        <input type="radio" name="q" value="${j}" ${done ? "disabled" : ""} ${done && j === m.quiz.answer ? "checked" : ""}> ${o}
                     </label>`).join("") +
                `<div class="msg ${done ? "ok" : ""}" id="msg">${done ? "✓ Correct!" : ""}</div>` +
                (done ? "" : `<button class="btn" id="check">Check Answer</button>`) + `</div>`;
        } else {
            body = `<div class="content">${m.html}</div>`;
        }

        let action = "";
        if (!m.quiz && !done) action = `<button class="btn" id="go">Mark as Complete &amp; Continue →</button>`;
        else if (done && cur < N - 1) action = `<button class="btn" id="next">Next Module →</button>`;
        else if (done) action = `<div class="msg ok">🎉 You completed this course!</div>`;

        $("viewer").innerHTML =
            `<div class="v-head"><div><h2>${m.title}</h2><p>This module is required</p></div><span class="pill">Module ${cur + 1} of ${N}</span></div>
             <div class="v-body">${body}<div class="actions">${action}</div></div>`;

        if ($("go")) $("go").onclick = () => { complete(); if (cur < N - 1) cur++; render(); scrollTo(0, 0); };
        if ($("next")) $("next").onclick = () => { cur++; render(); scrollTo(0, 0); };
        if ($("check")) $("check").onclick = () => {
            const s = document.querySelector("input[name=q]:checked");
            const msg = $("msg");
            if (!s) { msg.className = "msg no"; msg.textContent = "Please choose an answer."; return; }
            if (+s.value === m.quiz.answer) { complete(); render(); }
            else { msg.className = "msg no"; msg.textContent = "Not quite. Try again!"; }
        };
    }

    $("modules").addEventListener("click", (e) => {
        const li = e.target.closest(".mod");
        if (li && unlocked(+li.dataset.i)) { cur = +li.dataset.i; render(); }
    });

    render();
})();
