import { useEffect } from 'react';
import { getCMSConfig } from './config';
import { CMSRole } from './config-interface';

declare global {
  interface Window {
    CMS_MANUAL_INIT: boolean;
  }
}

const cmsRole: CMSRole = { name: 'reader', canCreate: false, canDelete: false, viewWorkFlow: false };

export const AdminPage = (): JSX.Element => {
  useEffect(() => {
    (async function () {
      window.CMS_MANUAL_INIT = true;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const CMS = (await import('netlify-cms')).default;

      CMS.registerMediaLibrary({
        name: 'disabled',
        init: () => ({ show: () => undefined, enableStandalone: () => false }),
      });

      const config = getCMSConfig(cmsRole);

      CMS.init({ config });
    })();
  }, []);

  return <div />;
};
