import type { resources, defaultNS } from "../../shared/config/i18n/i18n";

declare module "i18next" {
	interface CustomTypeOptions {
		defaultNS: typeof defaultNS;
		resources: (typeof resources)["en"];
	}
}
