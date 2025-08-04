import "./globals.css";
import Provider from "./provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
