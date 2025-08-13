import { SqliteWasmAdapter } from "./adapter/sqlite-wasm.adapter";
import { SqliteNodeAdapter } from "./adapter/sqlite-node.adapter";
import { chat, chat2, message, multiSql } from "./exampleSql";

// const adapter = new SqliteWasmAdapter();

// adapter.connect("wasmdata.sqlite");

const adapter = new SqliteNodeAdapter();

await adapter.connect("nodedata.sqlite");

/* await adapter
  .transaction(
    chat2
      .map((sql) => ({ sql, params: [] }))
      .concat([
        {
          sql: `INSERT INTO "chat" ("aChatId", "chatId", "finishLoadHistory", "hideInfo", "isMute", "latestMsgSeq", "latestMsgTime", "maxSequence", "onlyTwo", "stickActionTime", "total", "type") VALUES (?, ?, 0, ?, 0, 0, 0, 0, 0, NULL, 1, 2) ON CONFLICT (chatId) DO UPDATE SET chatId = excluded.chatId, aChatId = excluded.aChatId, maxSequence = excluded.maxSequence, latestMsgTime = excluded.latestMsgTime, latestMsgSeq = excluded.latestMsgSeq, onlyTwo = excluded.onlyTwo, type = excluded.type, total = excluded.total, isMute = excluded.isMute, hideInfo = excluded.hideInfo, stickActionTime = excluded.stickActionTime, finishLoadHistory = excluded.finishLoadHistory RETURNING *;`,
          params: ["g_tmmtmmpay", "g_tmmtmmpay", '{"seq":-1}'],
        },
        {
          sql: `INSERT INTO "chat" ("aChatId", "chatId", "finishLoadHistory", "hideInfo", "isMute", "latestMsgSeq", "latestMsgTime", "maxSequence", "onlyTwo", "stickActionTime", "total", "type") VALUES (?, ?, 0, ?, 0, 0, 0, 0, 0, NULL, 1, 2) ON CONFLICT (chatId) DO UPDATE SET chatId = excluded.chatId, aChatId = excluded.aChatId, maxSequence = excluded.maxSequence, latestMsgTime = excluded.latestMsgTime, latestMsgSeq = excluded.latestMsgSeq, onlyTwo = excluded.onlyTwo, type = excluded.type, total = excluded.total, isMute = excluded.isMute, hideInfo = excluded.hideInfo, stickActionTime = excluded.stickActionTime, finishLoadHistory = excluded.finishLoadHistory RETURNING *;`,

          params: [
            "s_3a4dc6868d4d6a77_5530a9ab27a014a7",
            "s_3a4dc6868d4d6a77_5530a9ab27a014a7",
            '{"seq":-1}',
          ],
        },
      ] as any[])
  )
  .then((res) => console.log(res)); */

await adapter.execute(multiSql + `INSERT INTO "chat" ("aChatId", "chatId", "finishLoadHistory", "hideInfo", "isMute", "latestMsgSeq", "latestMsgTime", "maxSequence", "onlyTwo", "stickActionTime", "total", "type") VALUES (?, ?, 0, ?, 0, 0, 0, 0, 0, NULL, 1, 2), (?, ?, 0, ?, 0, 2151, 1752823849457, 0, 1, NULL, 2, 1), (?, ?, 0, ?, 0, 2335, 1753174669217, 0, 1, NULL, 2, 1), (?, ?, 0, ?, 0, 1501, 1751975931714, 0, 1, NULL, 2, 1), (?, ?, 0, ?, 0, 2368, 1754473829954, 0, 1, NULL, 2, 1), (?, ?, 0, ?, 0, 1733, 1752117681549, 0, 1, NULL, 2, 1), (?, ?, 0, ?, 0, 1477, 1751957670046, 0, 1, NULL, 2, 1), (?, ?, 0, ?, 0, 1829, 1752211740154, 0, 1, NULL, 2, 1), (?, ?, 0, ?, 0, 1, 1743060047480, 0, 1, NULL, 2, 1) ON CONFLICT (chatId) DO UPDATE SET chatId = excluded.chatId, aChatId = excluded.aChatId, maxSequence = excluded.maxSequence, latestMsgTime = excluded.latestMsgTime, latestMsgSeq = excluded.latestMsgSeq, onlyTwo = excluded.onlyTwo, type = excluded.type, total = excluded.total, isMute = excluded.isMute, hideInfo = excluded.hideInfo, stickActionTime = excluded.stickActionTime, finishLoadHistory = excluded.finishLoadHistory RETURNING *;`, [
    "g_tmmtmmpay",
    "g_tmmtmmpay",
    "{\"seq\":-1}",
    "s_3a4dc6868d4d6a77_5530a9ab27a014a7",
    "s_3a4dc6868d4d6a77_5530a9ab27a014a7",
    "{\"seq\":-1}",
    "s_458341430b2535dc_5530a9ab27a014a7",
    "s_458341430b2535dc_5530a9ab27a014a7",
    "{\"seq\":-1}",
    "s_460cfdddc215d82b_5530a9ab27a014a7",
    "s_460cfdddc215d82b_5530a9ab27a014a7",
    "{\"seq\":-1}",
    "s_4fc622eef686a3ba_5530a9ab27a014a7",
    "s_4fc622eef686a3ba_5530a9ab27a014a7",
    "{\"seq\":-1}",
    "s_5530a9ab27a014a7_58b95f98769eccba",
    "s_5530a9ab27a014a7_58b95f98769eccba",
    "{\"seq\":-1}",
    "s_5530a9ab27a014a7_961d0dbf90d6dccf",
    "s_5530a9ab27a014a7_961d0dbf90d6dccf",
    "{\"seq\":-1}",
    "s_5530a9ab27a014a7_bbe47ce0db2c542c",
    "s_5530a9ab27a014a7_bbe47ce0db2c542c",
    "{\"seq\":-1}",
    "s_5530a9ab27a014a7_tmmtmmphoneass",
    "s_5530a9ab27a014a7_tmmtmmphoneass",
    "{\"seq\":-1}"
]).then(res => console.log(res));

const t1 = performance.now();
/* adapter.execute(`INSERT INTO "chat" ("aChatId", "chatId", "finishLoadHistory", "hideInfo", "isMute", "latestMsgSeq", "latestMsgTime", "maxSequence", "onlyTwo", "stickActionTime", "total", "type") VALUES (?, ?, 0, ?, 0, 0, 0, 0, 0, NULL, 1, 2), (?, ?, 0, ?, 0, 2151, 1752823849457, 0, 1, NULL, 2, 1), (?, ?, 0, ?, 0, 2335, 1753174669217, 0, 1, NULL, 2, 1), (?, ?, 0, ?, 0, 1501, 1751975931714, 0, 1, NULL, 2, 1), (?, ?, 0, ?, 0, 2368, 1754473829954, 0, 1, NULL, 2, 1), (?, ?, 0, ?, 0, 1733, 1752117681549, 0, 1, NULL, 2, 1), (?, ?, 0, ?, 0, 1477, 1751957670046, 0, 1, NULL, 2, 1), (?, ?, 0, ?, 0, 1829, 1752211740154, 0, 1, NULL, 2, 1), (?, ?, 0, ?, 0, 1, 1743060047480, 0, 1, NULL, 2, 1) ON CONFLICT (chatId) DO UPDATE SET chatId = excluded.chatId, aChatId = excluded.aChatId, maxSequence = excluded.maxSequence, latestMsgTime = excluded.latestMsgTime, latestMsgSeq = excluded.latestMsgSeq, onlyTwo = excluded.onlyTwo, type = excluded.type, total = excluded.total, isMute = excluded.isMute, hideInfo = excluded.hideInfo, stickActionTime = excluded.stickActionTime, finishLoadHistory = excluded.finishLoadHistory RETURNING *;`, [
    "g_tmmtmmpay",
    "g_tmmtmmpay",
    "{\"seq\":-1}",
    "s_3a4dc6868d4d6a77_5530a9ab27a014a7",
    "s_3a4dc6868d4d6a77_5530a9ab27a014a7",
    "{\"seq\":-1}",
    "s_458341430b2535dc_5530a9ab27a014a7",
    "s_458341430b2535dc_5530a9ab27a014a7",
    "{\"seq\":-1}",
    "s_460cfdddc215d82b_5530a9ab27a014a7",
    "s_460cfdddc215d82b_5530a9ab27a014a7",
    "{\"seq\":-1}",
    "s_4fc622eef686a3ba_5530a9ab27a014a7",
    "s_4fc622eef686a3ba_5530a9ab27a014a7",
    "{\"seq\":-1}",
    "s_5530a9ab27a014a7_58b95f98769eccba",
    "s_5530a9ab27a014a7_58b95f98769eccba",
    "{\"seq\":-1}",
    "s_5530a9ab27a014a7_961d0dbf90d6dccf",
    "s_5530a9ab27a014a7_961d0dbf90d6dccf",
    "{\"seq\":-1}",
    "s_5530a9ab27a014a7_bbe47ce0db2c542c",
    "s_5530a9ab27a014a7_bbe47ce0db2c542c",
    "{\"seq\":-1}",
    "s_5530a9ab27a014a7_tmmtmmphoneass",
    "s_5530a9ab27a014a7_tmmtmmphoneass",
    "{\"seq\":-1}"
]).then(res => console.log(performance.now() - t1, res))
 */

await adapter
  .execute("PRAGMA journal_mode=WAL;")
  .then((res) => console.log(res));

// await adapter
//   .execute(
//     `INSERT INTO "chat" ("aChatId", "chatId", "finishLoadHistory", "hideInfo", "isMute", "latestMsgSeq", "latestMsgTime", "maxSequence", "onlyTwo", "stickActionTime", "type") VALUES (?, ?, 0, ?, 0, 0, 0, 0, 0, NULL, 2) ON CONFLICT (chatId) DO UPDATE SET chatId = excluded.chatId, aChatId = excluded.aChatId, maxSequence = excluded.maxSequence, latestMsgTime = excluded.latestMsgTime, latestMsgSeq = excluded.latestMsgSeq, onlyTwo = excluded.onlyTwo, type = excluded.type, total = excluded.total, isMute = excluded.isMute, hideInfo = excluded.hideInfo, stickActionTime = excluded.stickActionTime, finishLoadHistory = excluded.finishLoadHistory RETURNING *;
//     INSERT INTO "message" ("aChatId", "action", "amid", "chatId", "content", "deleteFlag", "mid", "number", "sendTime", "sender", "sequence", "status", "timestamp", "type") VALUES (?, ?, ?, ?, ?, 0, ?, 938187, 1753155155983, ?, 2286, 6, 1753155155983, 80) ON CONFLICT (mid) DO UPDATE SET mid = excluded.mid, sequence = excluded.sequence, amid = excluded.amid, type = excluded.type, chatId = excluded.chatId, content = excluded.content, action = excluded.action, sendTime = excluded.sendTime, number = excluded.number, aChatId = excluded.aChatId, sender = excluded.sender, status = excluded.status, timestamp = excluded.timestamp, deleteFlag = excluded.deleteFlag, extra = excluded.extra, ep = excluded.ep, at = excluded.at RETURNING *;
//     INSERT INTO "chat" ("chatId", "finishLoadHistory", "hideInfo") VALUES (?, 0, ?) ON CONFLICT (chatId) DO UPDATE SET chatId = excluded.chatId, hideInfo = excluded.hideInfo, finishLoadHistory = excluded.finishLoadHistory RETURNING *;
//     `,
//     ["g_tmmtmm", "g_tmmtmm", '{"seq":-1}'].concat([
//       "s_458341430b2535dc_5530a9ab27a014a7",
//       "{}",
//       "4Ab0GW1753155155980_458341430b2535dccreateMessage",
//       "s_458341430b2535dc_5530a9ab27a014a7",
//       '{"omid":"93fe609571e89248cc6825b8e240bd81","oep":938179,"type":1,"content":"{\\"text\\":\\"213123213123-\\"}"}',
//       "4Ab0GW1753155155980_458341430b2535dccreateMessage",
//       "458341430b2535dc",

//       "g_72987653e9ed1ed3",
//       '{"seq":-1,"i":-1}',
//     ])
//   )
//   .then((res) => console.log(performance.now() - t1, res));
// const state = await adapter.prepare(`INSERT INTO "chat" ("aChatId", "chatId", "finishLoadHistory", "hideInfo", "isMute", "latestMsgSeq", "latestMsgTime", "maxSequence", "onlyTwo", "stickActionTime", "type") VALUES (?, ?, 0, ?, 0, 0, 0, 0, 0, NULL, 2) ON CONFLICT (chatId) DO UPDATE SET chatId = excluded.chatId, aChatId = excluded.aChatId, maxSequence = excluded.maxSequence, latestMsgTime = excluded.latestMsgTime, latestMsgSeq = excluded.latestMsgSeq, onlyTwo = excluded.onlyTwo, type = excluded.type, total = excluded.total, isMute = excluded.isMute, hideInfo = excluded.hideInfo, stickActionTime = excluded.stickActionTime, finishLoadHistory = excluded.finishLoadHistory RETURNING *;`);
// await state.run(["g_tmmtmm", "g_tmmtmm", '{"seq":-1}']).then(res => console.log);
// await state.run(['s_458341430b2535dc_5530a9ab27a014a7', 's_458341430b2535dc_5530a9ab27a014a7', '{"seq":-1}']).then(res => console.log(res));
// for (const sql of chat) {
//   await adapter.execute(sql);
// }

// for (const sql of message) {
//   await adapter.execute(sql);
// }

// chat.forEach(async (sql) => {
//   await adapter.execute(sql);
// });

// message.forEach(async (sql) => {
//   await adapter.execute(sql);
// });

// await adapter.execute("CREATE INDEX IF NOT EXISTS idx_chat_onlyTwo ON chat (onlyTwo);").then(res => console.log(res))
// await adapter.execute(`PRAGMA index_list('message');`).then(res => console.log(res))
// await adapter.execute("CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)");
// try {
//   await adapter.execute(`BEGIN TRANSACTION`);
//   await adapter.execute(`INSERT INTO test ('name') VALUES ('yahaha2')`);
//   await adapter.execute(`SELECT * FROM test`).then(res => {
//     console.log(res);
//   })
//   await adapter.execute(`INSERT INTO test1 ('name') VALUES ('yahaha2')`);
//   await adapter.execute(`COMMIT`);
// } catch (err) {
//   await adapter.execute(`ROLLBACK`);
// }
// await adapter.execute(`SELECT * FROM test`).then(res => {
//     console.log(res);
//   })
// adapter.execute(`DROP TABLE IF EXISTS test`);
// adapter.execute(`UPSERT INTO test (id, name) VALUES (2, 'ok')`);

// await adapter.execute(`DELETE FROM test WHERE id = 1`).then(res => {
//   console.log(res);
// })
