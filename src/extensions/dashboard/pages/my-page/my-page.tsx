import type { FC } from "react";
import { Button, Page, WixDesignSystemProvider } from "@wix/design-system";
import "@wix/design-system/styles.global.css";

import { embeddedScripts } from "@wix/app-management";
import { dashboard } from "@wix/dashboard";

const DashboardPage: FC = () => {
  async function embedScript() {
    console.log(
      "[embedded script dashboard page loader] - loading the embedded script",
    );

    await embeddedScripts.embedScript({
      parameters: {
        name: "Some User",
      },
    });

    dashboard.showToast({
      message: "Embedded script loaded!",
    });
  }

  return (
    <WixDesignSystemProvider features={{ newColorsBranding: true }}>
      <Page>
        <Page.Header
          title="My Page"
          subtitle="This is a subtitle for your page"
        />
        <Page.Content>
          <Button
            onClick={() => {
              embedScript();
            }}
          >
            Load the Embedded Script
          </Button>
        </Page.Content>
      </Page>
    </WixDesignSystemProvider>
  );
};

export default DashboardPage;
