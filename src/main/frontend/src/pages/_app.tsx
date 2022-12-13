import type { AppProps } from "next/app";

import "../styles/Button.scss";
import "../styles/Form.scss";
import "../styles/FormControls.scss";
import "../styles/FormMultiStep.scss";
import "../styles/FormProgress.scss";
import "../styles/FormStep.scss";
import "../styles/FormSuccess.scss";
import "../styles/FormSummary.scss";
import "../styles/IconBack.scss";
import "../styles/IconSuccess.scss";
import "../styles/Info.scss";
import "../styles/InputControlRadio.scss";
import "../styles/InputControlSelectRadio.scss";
import "../styles/InputControlSubmit.scss";
import "../styles/InputControlText.scss";
import "../styles/InputControl.scss";
import "../styles/Label.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
