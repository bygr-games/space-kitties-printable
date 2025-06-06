class EventDispatcher {
  static _instance: EventDispatcher;

  _listeners: Record<string, Record<string, Function[]>>;
  constructor() {
    this._listeners = {};
  }

  addEventListener(target: string, event: string, callback: Function) {
    this._listeners[target] ||= {};
    this._listeners[target][event] ||= [];
    this._listeners[target][event].push(callback);
  }

  removeEventListener(target: string, event: string, callback: Function) {
    const i = this._listeners[target][event].indexOf(callback);
    this._listeners[target][event].splice(i, 1);
  }

  dispatchEvent(target: string, event: string, payload: any) {
    if (this._listeners[target] && this._listeners[target][event]) {
      this._listeners[target][event].forEach((callback) => callback(payload));
    }
  }

  static getInstance() {
    if (!this._instance) {
      this._instance = new EventDispatcher();
    }
    return this._instance;
  }
}
export default EventDispatcher;
