const Header = () => {
    const view = `
    <div class="Header-main">
        <div class="Header-logo">
                <a href="#">
                    <img src="src/images/rm-logo.png">
                </a>
        </div>
        <div class="Header-nav">
        <div class="change">
        <span class="toogle-text" id="texto-toogle"></span>
          <label class="theme-switch" for="checkbox">
              <input type="checkbox" id="checkbox" />
              <span class="slider round"></span>
        </label>
        </div>
        </div>
    </div>
      `;
      return view
};

export default Header
