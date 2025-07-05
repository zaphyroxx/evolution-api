import { IntegrationDto } from '@api/integrations/integration.dto';
import { JsonValue } from '@prisma/client/runtime/library';
import { WAPresence } from 'baileys';

export class InstanceDto extends IntegrationDto {
  instanceName: string;
  instanceId?: string;
  qrcode?: boolean;
  businessId?: string;
  number?: string;
  integration?: string;
  token?: string;
  status?: string;
  ownerJid?: string;
  profileName?: string;
  profilePicUrl?: string;

  // settings
  rejectCall?: boolean;
  msgCall?: string;
  groupsIgnore?: boolean;
  alwaysOnline?: boolean;
  readMessages?: boolean;
  readStatus?: boolean;
  syncFullHistory?: boolean;
  wavoipToken?: string;

  // proxy
  proxyHost?: string;
  proxyPort?: string;
  proxyProtocol?: string;
  proxyUsername?: string;
  proxyPassword?: string;

  // propiedades heredadas de IntegrationDto (se usa 'declare' para evitar TS2612)
  declare webhook: {
    enabled?: boolean;
    events?: string[];
    headers?: JsonValue;
    url?: string;
    byEvents?: boolean;
    base64?: boolean;
  };
  declare chatwootAccountId: string;
  declare chatwootConversationPending: boolean;
  declare chatwootAutoCreate: boolean;
  declare chatwootDaysLimitImportMessages: number;
  declare chatwootImportContacts: boolean;
  declare chatwootImportMessages: boolean;
  declare chatwootLogo: string;
  declare chatwootMergeBrazilContacts: boolean;
  declare chatwootNameInbox: string;
  declare chatwootOrganization: string;
  declare chatwootReopenConversation: boolean;
  declare chatwootSignMsg: boolean;
  declare chatwootToken: string;
  declare chatwootUrl: string;
}

export class SetPresenceDto {
  presence: WAPresence;
}
