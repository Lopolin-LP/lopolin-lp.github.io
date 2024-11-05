function main() {
    document.getElementById("project-selection").onclick = projectSelect;
}
let viewer = undefined;
let lastSelected = undefined;
function projectSelect(elm) {
    let id = elm.target.id;
    let name = elm.target.getAttribute("data--");
    if (name == null) {
        return 0;
    }
    let data = projects[name];
    try {
        viewer.destroy();
    } catch(err) {
        console.log("Viewer not destroyed or not found, Stacktrace:", err);
    }
    try {
        lastSelected.classList.remove("active");
    } catch(err) {
        console.log("Last selected button not found, Stacktrace:", err);
    }
    lastSelected = elm.target;
    elm.target.classList.add("active");
    /* Create inner parent */
    let parent = document.createElement("div");
    parent.className = "flex column fullPercent centerH gap-nano";
    /* Create Overview - Screenshots */
    let screenshots = document.createElement("div");
    screenshots.className = "screenshots";
    let primaryShot = document.createElement("div");
    let secondaryShot = document.createElement("div");
    let pics = [];
    for (let i = 0; i < data.pics.length; i++) {
        let img = document.createElement("img");
        img.src = data.pics[i];
        img.className = "image";
        try {
            img.alt = data.pics_ext[i].replace(/(\r\n|\r|\n)/g, " | ");
            img.title = data.pics_ext[i];
        } catch (err) {}
        pics.push(img);
    }
    let noPics = false;
    if (pics[0] == undefined) { /* if no images exist... */
        noPics = true;
        let img = document.createElement("img");
        img.src = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA1YAAAHgCAYAAACmUPwqAAAABHNCSVQICAgIfAhkiAAAIABJREFUeF7t3Qe0NEldN+AmiIgiSYkCi8QlrGTJSVhQQUByzjnnvLKSXSUjSI5LWoKk5UiOkpQokhYUWHFBMoIg+H7zm89Zh7lVPT3Tc/vO7X3qnPfs3p5O9XRPTf2rqqtPdPKTn/xAIxEgQIAAAQIECBAgQIDA2gInXntLGxIgQIAAAQIECBAgQIDAVEBg5UYgQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9AmxMgQIAAAQIECBAgQEBg5R4gQIAAAQIECBAgQIBATwGBVU9A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gcEdjgABAgQIECBAgACB8QkIrMZ3TeWIAAECBAgQIECAAIGBBQRWA4M7HAECBAgQIECAAAEC4xMQWI3vmsoRAQIECBAgQIAAAQIDCwisBgZ3OAIECBAgQIAAAQIExicgsBrfNZUjAgQIECBAgAABAgQGFhBYDQzucAQIECBAgAABAgQIjE9AYDW+aypHBAgQIECAAAECBAgMLCCwGhjc4QgQIECAAAECBAgQGJ+AwGp811SOCBAgQIAAAQIECBAYWEBgNTC4wxEgQIAAAQIECBAgMD4BgdX4rqkcESBAgAABAgQIECAwsIDAamBwhyNAgAABAgQIECBAYHwCAqvxXVM5IkCAAAECBAgQIEBgYAGB1cDgDkeAAAECBAgQIECAwPgEBFbju6ZyRIAAAQIECBAgQIDAwAICq4HBHY4AAQIECBAgQIAAgfEJCKzGd03liAABAgQIECBAgACBgQUEVgODOxwBAgQIECBAgAABAuMTEFiN75rKEQECBAgQIECAAAECAwsIrAYGdzgCBAgQIECAAAECBMYnILAa3zWVIwIECBAgQIAAAQIEBhYQWA0M7nAECBAgQIAAAQIECIxPQGA1vmsqRwQIECBAgAABAgQIDCwgsBoY3OEIECBAgAABAgQIEBifgMBqfNdUjggQIECAAAECBAgQGFhAYDUwuMMRIECAAAECBAgQIDA+AYHV+K6pHBEgQIAAAQIECBAgMLCAwGpgcIcjQIAAAQIECBAgQGB8AgKr8V1TOSJAgAABAgQIECBAYGABgdXA4A5HgAABAgQIECBAgMD4BARW47umckSAAAECBAgQIECAwMACAquBwR2OAAECBAgQIECAAIHxCQisxndN5YgAAQIECBAgQIAAgYEFBFYDgzscAQIECBAgQIAAAQLjExBYje+ayhEBAgQIECBAgAABAgMLCKwGBnc4AgQIECBAgAABAgTGJyCwGt81lSMCBAgQIECAAAECBAYWEFgNDO5wBAgQIECAAAECBAiMT0BgNb5rKkcECBAgQIAAAQIECAwsILAaGNzhCBAgQIAAAQIECBAYn4DAanzXVI4IECBAgAABAgQIEBhYQGA1MLjDESBAgAABAgQIECAwPgGB1fiuqRwRIECAAAECBAgQIDCwgMBqYHCHI0CAAAECBAgQIEBgfAICq/FdUzkiQIAAAQIECBAgQGBgAYHVwOAOR4AAAQIECBAgQIDA+AQEVuO7pnJEgAABAgQIECBAgMDAAgKrgcEdjgABAgQIECBAgACB8QkIrMZ3TeWIAAECBAgQIECAAIGBBQRWA4M7HAECBAgQIECAAAEC4xMQWI3vmsoRAQIECBAgQIAAAQIDCwisBgZ3OAIECBAgQIAAAQIExicgsBrfNZUjAgQIECBAgAABAgQGFhBYDQzucAQIECBAgAABAgQIjE9AYDW+aypHBAgQIECAAAECBAgMLCCwGhjc4QgQIECAAAECBAgQGJ+AwGp811SOCBAgQIAAAQIECBAYWEBgNTC4wxEgQIAAAQIECBAgMD4BgdX4rqkcESBAgAABAgQIECAwsIDAamBwhyNAgAABAgQIECBAYHwCAqvxXVM5IkCAAAECBAgQIEBgYAGB1cDgDkeAAAECBAgQIECAwPgEBFbju6ZyRIAAAQIECBAgQIDAwAICq4HBHY4AAQIECBAgQIAAgfEJCKzGd03liAABAgQIECBAgACBgQUEVgODOxwBAgQIECBAgAABAuMTEFiN75rKEQECBAgQIECAAAECAwsIrAYGdzgCBAgQIECAAAECBMYnILAa3zWVIwIECBAgQIAAAQIEBhYQWA0M7nAECBAgQIAAAQIECIxPQGA1vmsqRwQIECBAgAABAgQIDCwgsBoY3OEIECBAgAABAgQIEBifgMBqfNdUjggQIECAAAECBAgQGFhAYDUwuMMRIECAAAECBAgQIDA+AYHV+K6pHBEgQIAAAQIECBAgMLCAwGpgcIcjQIAAAQIECBAgQGB8AgKr8V1TOSJAgAABAgQIECBAYGABgdXA4A5HgAABAgQIECBAgMD4BARW47umckSAAAECBAgQIECAwMACAquBwR2OAAECBAgQIECAAIHxCQisxndN5YgAAQIECBAgQIAAgYEFBFYDgzscAQIECBAgQIAAAQLjExBYje+ayhEBAgQIECBAgAABAgMLCKwGBnc4AgQIECBAgAABAgTGJyCwGt81lSMCBAgQIECAAAECBAYWEFgNDO5wBAgQIECAAAECBAiMT0BgNb5rKkcECBAgQIAAAQIECAwsILAaGNzhCBAgQIAAAQIECBAYn4DAanzXVI4IECBAgAABAgQIEBhYQGA1MLjDESBAgAABAgQIECAwPgGB1fiuqRwRIECAAAECBAgQIDCwgMBq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`;
        img.className = "image";
        pics.push(img);
    }
    primaryShot.appendChild(pics[0]);
    delete pics[0];
    pics.forEach((elm)=>{
        secondaryShot.appendChild(elm);
    })
    screenshots.setAttribute("data-amount", pics.length); /* tell the rest of the world how many screenshots are available */
    screenshots.appendChild(primaryShot);
    screenshots.appendChild(secondaryShot);
    /* Create Overview - Title and Description */
    let desc = document.createElement("div");
    desc.className = "description";
    let flex = document.createElement("div");
    flex.className = "desc-flex";
    let title = document.createElement("h1");
    title.innerHTML = data.title;
    let links = document.createElement("div");
    links.className = "flex row centerFull";
    let linksHTML = "";
    if (data.link !== null) {
        linksHTML += `<a href="${data.link}" target="_blank">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world" viewBox="0 0 24 24" stroke-width="1.5" stroke="var(--text)" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
        <path d="M3.6 9h16.8" />
        <path d="M3.6 15h16.8" />
        <path d="M11.5 3a17 17 0 0 0 0 18" />
        <path d="M12.5 3a17 17 0 0 1 0 18" />
    </svg>
</a>`
    }
    if (data.source !== null) {
        linksHTML += `<a href="${data.source}" target="_blank">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" viewBox="0 0 24 24" stroke-width="1.5" stroke="var(--text)" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
    </svg>
</a>`;
    }
    links.innerHTML = linksHTML;
    let text = document.createElement("p");
    text.innerHTML = data.description;

    flex.appendChild(title);
    flex.appendChild(links);
    desc.appendChild(flex);
    desc.appendChild(text);
    /* Put everything together */
    parent.appendChild(screenshots);
    parent.appendChild(desc);
    /* Clear Overview and append */
    document.getElementById("project-overview").innerHTML = "";
    document.getElementById("project-overview").appendChild(parent);
    /* add a viewer for the images */
    if (noPics !== true) {
        viewer = new Viewer(document.querySelector('#project-overview .screenshots'), {
            inline: false,
            transition: false
        });
    }
}
let projects = {
    "dc-indent": {
        pics: ["./overviews/dc-indent/primary.jpg", "./overviews/dc-indent/1.png", "./overviews/dc-indent/why.png"],
        title: "Discord Markdown Indent Fix",
        description: "After writing all rules of my Discord Server in Markdown and trying to paste them into chat resulted in the indentions of enumerations and bullet lists to be completely wrong. As Discord hasn't patched it I made a tool to convert all tabs to two spaces. It also has a Split Messages feature because nobody is gonna do that manually.",
        link: "https://lopolin-lp.github.io/markdown-discord-patch/markdown-discord-patch.html",
        source: "https://github.com/Lopolin-LP/markdown-discord-patch"
    },
    "dc-bdf": {
        pics: ["./overviews/dc-bdf/themes.jpg", "./overviews/dc-bdf/font.jpg", "./overviews/dc-bdf/emoji.jpg"],
        title: "BetterDiscordFont",
        description: "I hate Discords new font + BetterBackground Theme didn't accept the old font Theme + Window's Native Emojis appeared even though I replaced them with Noto Color Emoji. Being fed up with these things I decided to create this theme as a 3 in 1.",
        link: null,
        source: "https://github.com/Lopolin-LP/custom-discord-themes/tree/main/better-discord-font"
    },
    "base64clipboard": {
        pics: ["./overviews/base64clipboard/primary.jpg", "./overviews/base64clipboard/conversion.jpg", "./overviews/base64clipboard/help.jpg"],
        title: "Base64 Clipboard Encode",
        description: "I made a website for a Discord Server once. It was a downloadable HTML which you then just open. Because I wanted it to be available offline all files had to be encoded into base64 and put inside. As I was mostly copy+pasting stuff it made little sense to me to put it into a file and upload it to base64encode.org. Sadly I shortly after stopped working on that website, but hey, at least it exists for next time...",
        link: "https://lopolin-lp.github.io/base64-clipboard-encode/",
        source: "https://github.com/Lopolin-LP/base64-clipboard-encode"
    },
    "dc-mtc": {
        pics: ["./overviews/dc-mtc/primary.png"],
        title: "MoreTagColors (for Vencord)",
        description: "On my mobile phone I use modded Discord as well (Vendetta). One Plugin adds More Tags to certain people, such as owners, admins, staff, etc. and colors them. Vencord does that as well, but they aren't colored, so I made this theme to color them. Fully customizable. Main CSS and customization is within the same file.",
        link: null,
        source: "https://github.com/Lopolin-LP/custom-discord-themes/tree/main/more-tag-colors-vencord"
    },
    "dc-cci": {
        pics: ["./overviews/dc-cci/primary.png"],
        title: "Condensed Chat Icons",
        description: "So many plugins put their silly little icon in this already dense spot. On a 4:3 monitor that is straight up hell! It literally feels like typing on a mobile phone, every 5 words it wraps to the next line. This Theme fixes that by wrapping the icons. The Chat Field may be taller now, but who cares, at least you can type normally.",
        link: null,
        source: "https://github.com/Lopolin-LP/custom-discord-themes/tree/main/condensed-chat-icons"
    },
    "com-fan-art": {
        pics: ["./fan-art/moons_art_work_of_me.png"],
        pics_ext: ["M⚝o n | Discord: koi.x3\nCC BY-NC-ND 4.0"],
        title: "Fan Art (for me)",
        description: "Fan Art created by my wonderful, non-existant community! Hover over or click on any image to see it's title, creator and their socials.",
        link: null,
        source: null
    },
    "dc-ucroh": {
        pics: ["https://raw.githubusercontent.com/Lopolin-LP/custom-discord-themes/main/username-chat-readability-on-hover/showcase_2.png"],
        title: "Username Chat Readability On Hover",
        description: "Black Theme, Black Username. Good luck reading it in chat. Now you can when you hover over it.\nI made this plugin only because my friend complained about it once when he was trying to view the name of the person in this example.",
        link: null,
        source: "https://github.com/Lopolin-LP/custom-discord-themes/tree/main/username-chat-readability-on-hover"
    },
    "dc-dnddd": {
        pics: ["https://raw.githubusercontent.com/Lopolin-LP/custom-discord-themes/main/dnd-disable-dc/showcase.png"],
        title: "DnD Disable DC",
        description: "Removes everything in Discord when on DnD. Yes, no distraction, what DnD should be. I created this because I constantly got distracted by Discord instead of doing my work, well I had even less time after that but it was worth it.",
        link: null,
        source: "https://github.com/Lopolin-LP/custom-discord-themes/tree/main/dnd-disable-dc"
    },
    "dc-fulltxt": {
        pics: ["https://raw.githubusercontent.com/Lopolin-LP/custom-discord-themes/main/full-text/showcase.png"],
        title: "Full Text",
        description: "Discord often truncates the text of many Elements (channels, usernames, etc.), this disables that and wraps text accordingly. I hate when information is hidden away from me.",
        link: null,
        source: "https://github.com/Lopolin-LP/custom-discord-themes/tree/main/full-text"
    },
}

function viewCredits() {
    extraFooter(true, function(){
        document.querySelector("#extraFooter").innerHTML += `<div class="fullPercentRespectPad pad-all pad-medium">
    <div class="fullPercent flex column centerFull">
        <h2>Website</h2>
        <p class="flex column icon-links-parent">
            <a href="https://tabler.io/icons" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-tabler" viewBox="0 0 24 24" stroke-width="1.5" stroke="var(--text)" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M8 9l3 3l-3 3" />
                    <path d="M13 15l3 0" />
                    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                </svg> Tabler Icons</a>
            <a href="https://fengyuanchen.github.io/viewerjs/" target="_blank"><svg style="background-color: #fff6; border-radius: var(--nano)" class="icon icon-tabler icon-tabler-brand-viewerjs" viewBox="0 0 24 24" stroke-width="1.5" stroke="var(--text)" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <image x="4" y="4" width="16" height="16" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABaklEQVRYCe2Wa27DMAyDeYk97n+mrdh2mRYcQkZ1ZTs20rQ/GiAwm0j6aDlxCgDnB5/PYwAHH+q8O3Awf+XaycEOzLV4GXjWDmiJZsfavFRvfRorkQqcHStlV64K1wI/AJyW3fILwFstEMA7AMawJnM+G7HmWjSCt5gYgRNlrkXDAG+1TIzCpwzUTMzApw2UJn4A8GQXe2vO3Hi48xbxbkdzOf7COv52HrisnLkWWVTlGtuumTOfuvV2ZGXMtciikmtxzdkFdaL3ipalzLUoI5LfEa41b70dSQlfMtfCt3KRwRU5Y8JcC1VLxhZc4aMmzLVQpWLcAlfKiAlzLVQljCNwpW01Ya6FKizjDFwltpgw10LZg1+1kHYleybMtVjSOfPvye31ykHnA2auxTLzveAyw06oZtyszJXYc+aCa8xMiOs/BnKpHU7Je42liRsDvHAvuCYRTdwYIJwB9z5KE16CI+CaHFn/HbgA5KREyP1P6x0AAAAASUVORK5CYII=">
            </svg> ViewerJS</a>
                <a href="https://fonts.google.com/specimen/Open+Sans" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-typography" viewBox="0 0 24 24" stroke-width="1.5" stroke="var(--text)" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                <path d="M11 18h2" />
                <path d="M12 18v-7" />
                <path d="M9 12v-1h6v1" />
            </svg> OpenSans</a>
        </p>
        <h2>Minecraft Images</h2>
        <p><a href="https://www.minecraft.net/" target="_blank">Minecraft</a> and its assets are owned by <a href="https://wikipedia.org/wiki/Mojang_Studios" target="_blank">Mojang Studios</a>.</p>
        <p>If I recall correctly the Shader Pack was <a href="https://sildurs-shaders.github.io" target="_blank"> Sildurs Shaders</a>.</p>
        <p>The Skin is created by myself.</p>
    </div>
</div>`;
    });
};
function viewCopyright() {
    extraFooter(true, function(){
        document.querySelector("#extraFooter").innerHTML += `<div class="fullPercentRespectPad pad-all pad-medium">
    <div class="fullPercent flex column centerFull">
        <p>This sites code is licensed under <a href="/LICENSE">AGPL v3</a>.</p>
        <p>This sites assets are protected under copyright. See <a href="/assets/README.md">README for details</a> and <a href="/assets/LICENSE">LICENSE for Copyright Info</a> and read the <a href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons License</a> for details regarding usage.</p>
        <p>This sites Fan Art is protected under copyright. See <a href="/fan-art/LICENSE">LICENSE for details</a>. Each Copyright notice is different.</p>
        <p>If you plan to fork you MUST DELETE ALL CONTENT WITHIN the <code>/assets</code> and the <code>/fan-art</code> folder.</p>
    </div>
</div>`;
    });
};

function getDefaultAnimationTime() { /* Generated with Phind.com */
    let time = getComputedStyle(document.documentElement).getPropertyValue("--time");
    if (time.endsWith('s')) {
        // If time is in seconds, remove the 's' and convert to milliseconds
        return parseFloat(time.slice(0, -1)) * 1000;
    } else if (time.endsWith('ms')) {
        // If time is in milliseconds, just remove the 'ms'
        return parseFloat(time.slice(0, -2));
    } else {
        // If no unit is specified, assume the time is in milliseconds
        return parseFloat(time);
    }
}

let extraFooterObserver = undefined;
let callBackErrorString = "Callback Error."
let extraFooterAlreadyRunning = false;
function extraFooter(state, callback) {
    if (extraFooterAlreadyRunning === true) {
        console.log("extraFooter already running. Function call with following properties ignored:", [state, callback]);
        return;
    }
    extraFooterAlreadyRunning = true;
    let isClosed = document.querySelector("#extraFooter").getAttribute("data-open") != "true";
    if (state === true && isClosed) {
        try {
            callback();
        } catch(err) {
            console.log(callBackErrorString, err)
        }
        document.querySelector("#extraFooter").setAttribute("data-open", "true");
        document.querySelector("main").setAttribute("data-noSnap", "");
        let interval = setInterval(()=>{forceViewOntoElm(document.querySelector("#extraFooter"))}, 10);
        setTimeout(()=>{
            clearInterval(interval);
            forceViewOntoElm(document.querySelector("#extraFooter"));
            document.querySelector("main").removeAttribute("data-noSnap");
            setTimeout(()=>{
                // Intersection Observer
                extraFooterObserver = new IntersectionObserver(entries => { /* https://stackoverflow.com/a/57327604 */
                    entries.forEach(elem => {
                        if (elem.isIntersecting) {
                            finishExtraFooter();
                        }
                    });
                });
                document.querySelectorAll('main > *').forEach(elem => extraFooterObserver.observe(elem));
            }, 10)
            extraFooterAlreadyRunning = false;
              
            /* DO NOT Change the order of the commands above. It works in this order, please do not f***ing change it, thanks */
        }, getDefaultAnimationTime());
    } else {
        // document.querySelector("main").style.overflow = "auto";
        document.querySelector("#extraFooter").setAttribute("data-open", "false");
        try {
            document.querySelectorAll('main > *').forEach(elem => extraFooterObserver.unobserve(elem));
        } catch {}
        setTimeout(()=>{
            document.querySelector("#extraFooter").innerHTML = "";
            console.log("deleted contents of #extraFooter");
            if (isClosed) {
                try {
                    callback();
                } catch(err) {
                    console.log(callBackErrorString, err);
                }
                extraFooterAlreadyRunning = false;
                console.log("Is Closed. Initiated Callback");
            } else if (!isClosed) {
                extraFooterAlreadyRunning = false;
                extraFooter(state, callback);
                console.log("Is NOT Closed. Restarted Function");
            }
        }, getDefaultAnimationTime() + 10);
    }
}

function finishExtraFooter() {
    if (isScrolledIntoView(document.querySelector("#primaryFooter")) == true) {
        document.querySelector("main").setAttribute("data-noSnap", "");
        extraFooter(false);
        setTimeout(()=>{
            if (isScrolledIntoView(document.querySelector("footer")) === true) {
                forceViewOntoElm(document.querySelector("#extraFooter"));
            }
            document.querySelector("main").removeAttribute("data-noSnap");
        }, getDefaultAnimationTime() + 10);
    }
    console.log("finishExtraFooter isScrolledIntoView:", isScrolledIntoView(document.querySelector("#extraFooter")));
}

function cumulativeOffset(element) { /* Created with Phind.com */
    var top = 0;
    do {
        top += element.offsetTop || 0;
        element = element.offsetParent;
    } while(element);
    return top;
};

function forceViewOntoElm(elm) { /* Created partially with Phind.com */
    var top = cumulativeOffset(elm);
    document.querySelector("main").scrollTo(0, top);
    console.log("wow", top);
}

function isScrolledIntoView(el) { /* Created with Phind.com */
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}
function isPartiallyScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    // var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}

let lxpxlinFirstRun = true;
let lxpxlinElms = {
    lopolin: {
        desc: ""
    },
    lxpxlin: {
        desc: `<h1>Hello, I'm Lxpxlin.</h1>
        <p>I am Lopolin, but higher Quality.</p>
        <p>I only post high quality stuff. I am essentially the proffessional account of Lopolin.</p>
        <div class="flex row wrap iconEffect">
            <a href="https://www.youtube.com/@Lxpxlin" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" style="--custom-color: #f00;" class="icon icon-tabler icon-tabler-brand-youtube" viewBox="0 0 24 24" stroke-width="1.5" stroke="var(--icon-color)" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
                    <path d="M10 9l5 3l-5 3z" />
                </svg>
            </a>
        </div>`
    },
    currentState: false
}
function lxpxlin(state) {
    if (lxpxlinFirstRun) {
        lxpxlinFirstRun = false;
        lxpxlinElms.lopolin.desc = document.querySelector("#introduction-description").innerHTML;
    }
    if (state === "toggle") {
        state = !lxpxlinElms.currentState;
    }
    let imgLinks = [document.querySelector("#intro-primary-image").getAttribute('href'), document.querySelector("#intro-secondary-image").getAttribute('href')];
    document.querySelector("#intro-primary-image").setAttribute('href', imgLinks[1]);
    document.querySelector("#intro-secondary-image").setAttribute('href', imgLinks[0]);
    // document.querySelector("#intro-secondary-image").href = imgLinks[0];
    if (state) {
        document.querySelector("#introduction-description").innerHTML = lxpxlinElms.lxpxlin.desc;
        lxpxlinElms.currentState = true;
    } else if (!state) {
        document.querySelector("#introduction-description").innerHTML = lxpxlinElms.lopolin.desc;
        lxpxlinElms.currentState = false;
    } else {
        console.log("lxpxlin state: invalid/not a boolean.", state)
    }
}