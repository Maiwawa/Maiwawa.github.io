const app = Vue.createApp({
    components: {
        'header-component': {
            template: `
                <div class="menu">
                    <div class="menu-left">
                        FLOATING　<span>FANTASY</span>
                    </div>
            
                    <div class="menu-right">
                        <div class="menu-title">
                            <div>
                                <a href="index.html">
                                    <span>FLOATING FANTASY</span><br />
                                    <span>FLOATING FANTASY</span><br />
                                    <span>─ Eastern Gouache art of Lee Chen-huei ─</span>
                                </a>
                            </div>
                        </div>
                        <div class="menu-lists">
                            <div class="menu-list">
                                <a href="period.html">
                                    <div class="menu-nav">
                                        作品賞析<span> - 小註</span>
                                        <div class="bottom-line"></div>
                                    </div>
                                </a>
                                <div class="second-navs">
                                    <div class="menu-second-nav">
                                        <a href="period-information.html?id=first">
                                            <div>
                                                第一期
                                                <div>
                                                    <div class="arrow">
                                                        <div class="arrow-bar"></div>
                                                        <div class="arrow-top"></div>
                                                        <div class="arrow-bottom"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="note">小註</div>
                                        </a>
                                    </div>
                                    <div class="menu-second-nav">
                                        <a href="period-information.html?id=second">
                                            <div>
                                                第二期
                                                <div>
                                                    <div class="arrow">
                                                        <div class="arrow-bar"></div>
                                                        <div class="arrow-top"></div>
                                                        <div class="arrow-bottom"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="note">小註</div>
                                        </a>
                                    </div>
                                    <div class="menu-second-nav">
                                        <a href="period-information.html?id=third">
                                            <div>
                                                第三期
                                                <div>
                                                    <div class="arrow">
                                                        <div class="arrow-bar"></div>
                                                        <div class="arrow-top"></div>
                                                        <div class="arrow-bottom"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="note">小註</div>
                                        </a>
                                    </div>
                                    <div class="menu-second-nav">
                                        <a href="period-information.html?id=fourth">
                                            <div>
                                                第四期
                                                <div>
                                                    <div class="arrow">
                                                        <div class="arrow-bar"></div>
                                                        <div class="arrow-top"></div>
                                                        <div class="arrow-bottom"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="note">小註</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="menu-list">
                                <div class="menu-nav">
                                    <a href="artist.html">
                                        作者介紹<span> - 小註</span>
                                        <div class="bottom-line"></div>
                                    </a>
                                </div>
                                <div class="menu-nav">
                                    <a href="about.html">
                                        展覽理念<span> - 小註</span>
                                        <div class="bottom-line"></div>
                                    </a>
                                </div>
                                <div class="menu-nav">
                                    <a href="information.html">
                                        動態消息<span> - 小註</span>
                                        <div class="bottom-line"></div>
                                    </a>
                                </div>
                            </div>
                            <div class="menu-list">
                                <div class="menu-nav">
                                    互動專區<span> - 小註</span>
                                    <div class="bottom-line"></div>
                                </div>
                                <div class="menu-nav">
                                    採訪影片<span> - 小註</span>
                                    <div class="bottom-line"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
        },
        'loader-component': {
            template:
                `<div class="loader_bg">
            <div class="loader"></div>
        </div>`
        },
        'button-component': {
            template:
                `<div id="btn">
            <i class="fa-solid fa-bars"></i>
        </div>`
        },
        'left-component': {
            template: `<div class="left">
            <div class="left-content">
                <div class="bar-content">
                    <div class="bar"></div>
                </div>
                <div class="text"></div>
            </div>
        </div>`
        }

    }
});

app.mount('#app');