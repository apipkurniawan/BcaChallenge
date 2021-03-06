import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: [
    `
      :host {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
          "Segoe UI Symbol";
        font-size: 14px;
        color: #333;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      .spacer {
        flex: 1;
      }
      .toolbar {
        height: 60px;
        margin: -8px;
        display: flex;
        align-items: center;
        background-color: #1163af;
        color: white;
        font-weight: 600;
      }

      .toolbar img {
        margin: 0 16px;
      }

      .toolbar #twitter-logo {
        height: 40px;
        margin: 0 16px;
      }

      .toolbar #twitter-logo:hover {
        opacity: 0.8;
      }

      .footer {
        height: 40px;
        background-color: #1163af;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
      }
    `,
  ],
})
export class AppComponent {
  title = "bcaChallenge";
}
