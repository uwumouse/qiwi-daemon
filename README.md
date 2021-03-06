# QiWi Daemon

`qiwi-daemon` is a package that helps you work with qiwi transtactions. 

# How does it work?
Daemon will be checking for active transtaction sessions in storage (storage types will be shown later).  
If daemon finds a session in storage by transaction comment, it'll fire up a listener in code, so you can get notified and process this event.

# Installation
Install repo from NPM.
```bash
npm i qiwi-daemon
```

# Using in your code
```typescript
import { QiWiDaemon } from "qiwi-daemon";

// This will force daemon to use JSON file to store sessions
const daemon = new QiWiDaemon({ database: 'json' });

// This function will be called when daemon is stated.
daemon.listen("start", () => {
    console.log("Looks like somebody's watchin' my transactions!");
    
    // Manually creating session
    daemon.createPaymentSession("kwinso");

    // With your own keyword
    daemon.createPaymentSession("bob", "bob_is_cool");
});

// Fires up when payement has confirmed
daemon.listen("confirm_transaction", (id: string) => {
    console.log(`${id} just paid!`);
})

// Does the same, but less code
daemon.onTransactionConfirm(id => {
    console.log(`Did I tell you that ${id} just paid?`);

    // Let's exit!
    daemon.stop();
});

daemon.listen("stop", (msg) => {
    console.log("Oops, daemon stopped!", "Message: ", msg)
});

daemon.start();
```

# Configuration

### Enviromen variables
`qiwi-daemon` uses `.qiwi.env` file to process the most part of configuration data.  
Values in this file contain sensitive information, so It's likely you store it in file rather than in code.  
Here are all positions in this file.    

**Required**:
- **PHONE_NUMBER** - Phone number that you have used to create a QiWi Account
- **QIWI_TOKEN** -  A QiWi API token (Get it [here](https://qiwi.com/api))
> QiWi token must allow app to see transactions history. Other permissions are not required.
- **PAYMENT_AMOUNT** - Amount of your currency to process this payment  
  
**Not required**:
- **NO_LOGS** - Don't show logs from daemon (Pass `true` to turn this on)
> Daemon also logs every transaction it has processed, it'll be turned off with this option set to `true`
- **DEBUG** - Enable debug log
- **REDIS_PREFIX** - Prefix for entiries in Redis Storage
> `REDIS_PREFIX` is usefull only if you've set storage type to "redis"
> Example for `.qiwi.env` you can find in this repository

### In-code config
Daemon could accept config object, as you could see in example earlier.  
All options are not required, since there are default values used.  

| Syntax | Description | Type | Default |
| ----------- | ----------- | ----------- | ----------- |
| **storage** | Could be "redis" or "json". Defines how daemon will store sessions | `string` | `"json"`
| **updateTimeout** | Defines how often daemon will check for new transaction in seconds | `number` | `30`
| **jsonName** | Name of the file containing storage | `string` | `"qiwi-daemon.db.json"`
> `jsonName` will be usefull only if you have set `storage` to `"json"`  
  
> When using `json` storage type, file for this fill be created in directory where you start yor program, as well as log file for transactions.
Example config:
```typescript
const config = {
    storage: "json",
    // Check for updates every 15 second
    updateTimeout: 15,
    jsonName: "mystorage.json"
}
```

# Logging
`qiwi-daemon` uses [winston](https://www.npmjs.com/package/winston) to log data to the screen and files.  
If `NO_LOGS` is not set to `true`, then all payment confirmations will be logged to `qiwi-daemon.log` file.  

# Events
You can set event listeners for your daemon, to get notified what's happening to it.
| Event name | Description | Callback Data |
| -----------| ----------- | -----------   |
| `start` | Daemon started and working | `undefined` |
| `confirm_transaction` | Transaction confirmation | `id: string` - value that identifies user for the session |
| `stop` | Daemon has stopped due to error or manually | `message: string` - message describes stopping reason |
| `watch_start` | Daemon started watching for updates in your wallet | `undefined` |
