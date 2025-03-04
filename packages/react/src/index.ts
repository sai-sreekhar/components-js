export * from './components/index.js';

export * from './hooks';

export * from './prefabs';

export * from './context';

export * from './assets/icons';

export * from './assets/images';

export * from './utils';  // Added this line by akash

export * from './assets/icons/util';
// Re-exports from core
export { setLogLevel, setLogExtension, isTrackReference } from '@livekit/components-core';
export type {
  ChatMessage,
  ReceivedChatMessage,
  MessageDecoder,
  MessageEncoder,
  LocalUserChoices,
  TrackReference,
  TrackReferenceOrPlaceholder,
  ParticipantClickEvent,
  ParticipantIdentifier,
  PinState,
  WidgetState,
  GridLayoutDefinition,
} from '@livekit/components-core';
