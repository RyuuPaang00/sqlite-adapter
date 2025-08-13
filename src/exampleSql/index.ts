export const message = [
  `CREATE TABLE IF NOT EXISTS message (id INTEGER PRIMARY KEY AUTOINCREMENT, aChatId TEXT, action TEXT, amid TEXT, chatId TEXT NOT NULL, content TEXT, deleteFlag INTEGER NOT NULL, displayTime INTEGER, ep INTEGER, extra TEXT, local TEXT, mid TEXT NOT NULL, number INTEGER, at INTEGER, sendTime INTEGER, sender TEXT, sequence INTEGER NOT NULL, status INTEGER, timestamp INTEGER, type INTEGER, localTime INTEGER, __from TEXT, __localSend BOOLEAN);`,
  "CREATE INDEX IF NOT EXISTS idx_message_chatId ON message (chatId);",
  "CREATE INDEX IF NOT EXISTS idx_message_sequence ON message (sequence);",
  "CREATE INDEX IF NOT EXISTS idx_message_amid ON message (amid);",
  "CREATE INDEX IF NOT EXISTS idx_message_aChatId ON message (aChatId);",
  "CREATE INDEX IF NOT EXISTS idx_message_number ON message (number);",
  "CREATE INDEX IF NOT EXISTS idx_message_status ON message (status);",
  "CREATE UNIQUE INDEX IF NOT EXISTS idx_message_mid ON message (mid);",
  "CREATE INDEX IF NOT EXISTS idx_message_index_message_chat_status ON message (chatId,status);",
];

export const chat = [
  "CREATE TABLE IF NOT EXISTS chat (aChatId TEXT, chatId TEXT PRIMARY KEY, lastMessage TEXT, unreadCount INTEGER, isMute INTEGER, avatar TEXT, name TEXT, isTop INTEGER, isShowName INTEGER, timestamp INTEGER, hide BOOLEAN, hideInfo TEXT, stickActionTime INTEGER, total INTEGER, type INTEGER, onlyTwo INTEGER, subTitle TEXT, marker TEXT, isFolder INTEGER, folderId TEXT, top_sequence INTEGER, chatPartner TEXT, maxSequence INTEGER, finishLoadHistory INTEGER, at INTEGER, maxUserMsgSeq INTEGER, maxMsgNo INTEGER, minMsgNo INTEGER, isLocal BOOLEAN, extra TEXT, latestMsgTime INTEGER, latestMsgSeq INTEGER);",
  "CREATE INDEX IF NOT EXISTS idx_chat_chatId ON chat (chatId);",
  "CREATE INDEX IF NOT EXISTS idx_chat_aChatId ON chat (aChatId);",
  "CREATE INDEX IF NOT EXISTS idx_chat_unreadCount ON chat (unreadCount);",
  "CREATE INDEX IF NOT EXISTS idx_chat_onlyTwo ON chat (onlyTwo);",
  "CREATE INDEX IF NOT EXISTS idx_chat_timestamp ON chat (timestamp);",
  "CREATE INDEX IF NOT EXISTS idx_chat_finishLoadHistory ON chat (finishLoadHistory);",
  "CREATE INDEX IF NOT EXISTS idx_chat_maxUserMsgSeq ON chat (maxUserMsgSeq);",
  "CREATE INDEX IF NOT EXISTS idx_chat_maxMsgNo ON chat (maxMsgNo);",
  "CREATE INDEX IF NOT EXISTS idx_chat_minMsgNo ON chat (minMsgNo);",
  "CREATE INDEX IF NOT EXISTS idx_chat_isLocal ON chat (isLocal);",
];
export const chat2 = [
  "CREATE TABLE IF NOT EXISTS chat (aChatId TEXT, chatId TEXT PRIMARY KEY, lastMessage TEXT, unreadCount INTEGER, isMute INTEGER, avatar TEXT, name TEXT, isTop INTEGER, isShowName INTEGER, timestamp INTEGER, hide BOOLEAN, hideInfo TEXT, stickActionTime INTEGER, total INTEGER, type INTEGER, onlyTwo INTEGER, subTitle TEXT, marker TEXT, isFolder INTEGER, folderId TEXT, top_sequence INTEGER, chatPartner TEXT, maxSequence INTEGER, finishLoadHistory INTEGER, at INTEGER, maxUserMsgSeq INTEGER, maxMsgNo INTEGER, minMsgNo INTEGER, isLocal BOOLEAN, extra TEXT, latestMsgTime INTEGER, latestMsgSeq INTEGER);",
];

export const multiSql = `BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS groupSequence (groupId TEXT PRIMARY KEY, sequence INTEGER NOT NULL);
CREATE INDEX IF NOT EXISTS idx_groupSequence_sequence ON groupSequence (sequence);
CREATE TABLE IF NOT EXISTS memberInfos (uid TEXT PRIMARY KEY, auid TEXT, status INTEGER, name TEXT, avatar TEXT, avatarPath TEXT, isFriend INTEGER, friendAlias TEXT, isStar INTEGER, phone TEXT, signature TEXT, gender INTEGER, viewDetail INTEGER, firstName TEXT, lastName TEXT, regionId TEXT);
CREATE INDEX IF NOT EXISTS idx_memberInfos_uid ON memberInfos (uid);
CREATE INDEX IF NOT EXISTS idx_memberInfos_isFriend ON memberInfos (isFriend);
CREATE INDEX IF NOT EXISTS idx_memberInfos_name ON memberInfos (name);
CREATE INDEX IF NOT EXISTS idx_memberInfos_auid ON memberInfos (auid);
CREATE INDEX IF NOT EXISTS idx_memberInfos_status ON memberInfos (status);
CREATE TABLE IF NOT EXISTS chat (aChatId TEXT, chatId TEXT PRIMARY KEY, lastMessage TEXT, unreadCount INTEGER, isMute INTEGER, avatar TEXT, name TEXT, isTop INTEGER, isShowName INTEGER, timestamp INTEGER, hide BOOLEAN, hideInfo TEXT, stickActionTime INTEGER, total INTEGER, type INTEGER, onlyTwo INTEGER, subTitle TEXT, marker TEXT, isFolder INTEGER, folderId TEXT, top_sequence INTEGER, chatPartner TEXT, maxSequence INTEGER, finishLoadHistory INTEGER, at INTEGER, maxUserMsgSeq INTEGER, maxMsgNo INTEGER, minMsgNo INTEGER, isLocal BOOLEAN, extra TEXT, latestMsgTime INTEGER, latestMsgSeq INTEGER);
CREATE INDEX IF NOT EXISTS idx_chat_chatId ON chat (chatId);
CREATE INDEX IF NOT EXISTS idx_chat_aChatId ON chat (aChatId);
CREATE INDEX IF NOT EXISTS idx_chat_unreadCount ON chat (unreadCount);
CREATE INDEX IF NOT EXISTS idx_chat_onlyTwo ON chat (onlyTwo);
CREATE INDEX IF NOT EXISTS idx_chat_timestamp ON chat (timestamp);
CREATE INDEX IF NOT EXISTS idx_chat_finishLoadHistory ON chat (finishLoadHistory);
CREATE INDEX IF NOT EXISTS idx_chat_maxUserMsgSeq ON chat (maxUserMsgSeq);
CREATE INDEX IF NOT EXISTS idx_chat_maxMsgNo ON chat (maxMsgNo);
CREATE INDEX IF NOT EXISTS idx_chat_minMsgNo ON chat (minMsgNo);
CREATE INDEX IF NOT EXISTS idx_chat_isLocal ON chat (isLocal);
CREATE TABLE IF NOT EXISTS groupMembers (id TEXT PRIMARY KEY, gid TEXT NOT NULL, chatId TEXT, auid TEXT, uid TEXT NOT NULL, alias TEXT, isOwner INTEGER, isAdmin INTEGER, deleted INTEGER, createTime INTEGER, adminTime INTEGER, permission INTEGER);
CREATE INDEX IF NOT EXISTS idx_groupMembers_id ON groupMembers (id);
CREATE INDEX IF NOT EXISTS idx_groupMembers_uid ON groupMembers (uid);
CREATE INDEX IF NOT EXISTS idx_groupMembers_gid ON groupMembers (gid);
CREATE TABLE IF NOT EXISTS message (id INTEGER PRIMARY KEY AUTOINCREMENT, aChatId TEXT, action TEXT, amid TEXT, chatId TEXT NOT NULL, content TEXT, deleteFlag INTEGER NOT NULL, displayTime INTEGER, ep INTEGER, extra TEXT, local TEXT, mid TEXT NOT NULL, number INTEGER, at INTEGER, sendTime INTEGER, sender TEXT, sequence INTEGER NOT NULL, status INTEGER, timestamp INTEGER, type INTEGER, localTime INTEGER, __from TEXT, __localSend BOOLEAN);
CREATE INDEX IF NOT EXISTS idx_message_chatId ON message (chatId);
CREATE INDEX IF NOT EXISTS idx_message_sequence ON message (sequence);
CREATE INDEX IF NOT EXISTS idx_message_amid ON message (amid);
CREATE INDEX IF NOT EXISTS idx_message_aChatId ON message (aChatId);
CREATE INDEX IF NOT EXISTS idx_message_number ON message (number);
CREATE INDEX IF NOT EXISTS idx_message_status ON message (status);
CREATE UNIQUE INDEX IF NOT EXISTS idx_message_mid ON message (mid);
CREATE INDEX IF NOT EXISTS idx_message_index_message_chat_status ON message (chatId,status);
CREATE TABLE IF NOT EXISTS newHistoryMessage (id INTEGER PRIMARY KEY AUTOINCREMENT, mid TEXT NOT NULL, chatId TEXT NOT NULL, status INTEGER NOT NULL, aChatId TEXT, action TEXT, amid TEXT, content TEXT, deleteFlag INTEGER NOT NULL, displayTime INTEGER, ep INTEGER, extra TEXT, local TEXT, number INTEGER, sendTime INTEGER, sender TEXT, timestamp INTEGER, type INTEGER, localTime INTEGER, isHistory BOOLEAN DEFAULT TRUE, segment INTEGER, __from TEXT, __localSend BOOLEAN);
CREATE INDEX IF NOT EXISTS idx_newHistoryMessage_chatId ON newHistoryMessage (chatId);
CREATE INDEX IF NOT EXISTS idx_newHistoryMessage_amid ON newHistoryMessage (amid);
CREATE INDEX IF NOT EXISTS idx_newHistoryMessage_aChatId ON newHistoryMessage (aChatId);
CREATE INDEX IF NOT EXISTS idx_newHistoryMessage_number ON newHistoryMessage (number);
CREATE INDEX IF NOT EXISTS idx_newHistoryMessage_status ON newHistoryMessage (status);
CREATE UNIQUE INDEX IF NOT EXISTS idx_newHistoryMessage_mid ON newHistoryMessage (mid);
CREATE TABLE IF NOT EXISTS draft (mid TEXT PRIMARY KEY, chatId TEXT NOT NULL, aChatId TEXT, amid TEXT, content TEXT, extra TEXT, sender TEXT, timestamp INTEGER, type INTEGER);
CREATE INDEX IF NOT EXISTS idx_draft_chatId ON draft (chatId);
CREATE TABLE IF NOT EXISTS segment (chatId TEXT NOT NULL, maxNo INTEGER NOT NULL, minNo INTEGER NOT NULL, segment INTEGER PRIMARY KEY);
CREATE INDEX IF NOT EXISTS idx_segment_chatId ON segment (chatId);
CREATE INDEX IF NOT EXISTS idx_segment_segment ON segment (segment);
CREATE INDEX IF NOT EXISTS idx_segment_maxNo ON segment (maxNo);
CREATE INDEX IF NOT EXISTS idx_segment_minNo ON segment (minNo);
CREATE INDEX IF NOT EXISTS idx_segment_chat_segment ON segment (chatId,segment);
CREATE TABLE IF NOT EXISTS folder (folderId TEXT PRIMARY KEY, aFolderId TEXT NOT NULL, name TEXT);
CREATE INDEX IF NOT EXISTS idx_folder_folderId ON folder (folderId);
CREATE INDEX IF NOT EXISTS idx_folder_aFolderId ON folder (aFolderId);
CREATE TABLE IF NOT EXISTS folderChat (id TEXT PRIMARY KEY, aFolderId TEXT NOT NULL, chatId TEXT NOT NULL);
CREATE INDEX IF NOT EXISTS idx_folderChat_chatId ON folderChat (chatId);
CREATE INDEX IF NOT EXISTS idx_folderChat_aFolderId ON folderChat (aFolderId);
CREATE INDEX IF NOT EXISTS idx_folderChat_aFolderId_chatId ON folderChat (aFolderId,chatId);
CREATE TABLE IF NOT EXISTS download (id TEXT PRIMARY KEY, oriName TEXT NOT NULL, path TEXT NOT NULL, objectId TEXT NOT NULL, summary TEXT NOT NULL, mid TEXT NOT NULL, createAt INTEGER NOT NULL);
CREATE INDEX IF NOT EXISTS idx_download_createAt ON download (createAt);
CREATE TABLE IF NOT EXISTS ack (mid TEXT PRIMARY KEY, aChatId TEXT, action TEXT, amid TEXT, chatId TEXT NOT NULL, content TEXT, deleteFlag INTEGER NOT NULL, displayTime INTEGER, ep INTEGER, extra TEXT, local TEXT, number INTEGER, at INTEGER, sendTime INTEGER, sender TEXT, sequence INTEGER NOT NULL, status INTEGER, timestamp INTEGER, type INTEGER, localTime INTEGER, isHistory BOOLEAN, __from TEXT, __localSend BOOLEAN);
CREATE INDEX IF NOT EXISTS idx_ack_chatId ON ack (chatId);
CREATE INDEX IF NOT EXISTS idx_ack_status ON ack (status);
CREATE INDEX IF NOT EXISTS idx_ack_deleteFlag ON ack (deleteFlag);
CREATE TABLE IF NOT EXISTS task (id TEXT PRIMARY KEY, type TEXT NOT NULL, correlationID TEXT NOT NULL, correlationType TEXT NOT NULL);
CREATE INDEX IF NOT EXISTS idx_task_correlationID ON task (correlationID);
CREATE INDEX IF NOT EXISTS idx_task_type ON task (type);
CREATE INDEX IF NOT EXISTS idx_task_correlationType ON task (correlationType);
COMMIT;`;
