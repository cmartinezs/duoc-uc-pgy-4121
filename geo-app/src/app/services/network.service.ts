import { Injectable } from '@angular/core';
import { PluginListenerHandle } from '@capacitor/core';
import { ConnectionStatus, ConnectionStatusChangeListener, Network } from '@capacitor/network';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  listeners: { [key: string]: PluginListenerHandle | null } = {};

  private qualityStatus = new BehaviorSubject<string>('BAD');
  private qualityStatus$ = this.qualityStatus.asObservable();


  constructor() { }

  getStatus(): Promise<ConnectionStatus> {
    return Network.getStatus();
  }

  async addListener(listenerName: string, listenerFunc: ConnectionStatusChangeListener): Promise<PluginListenerHandle> {
    return Network
      .addListener('networkStatusChange', listenerFunc)
      .then((handler: PluginListenerHandle) => {
        console.log(`Listener added for ${listenerName}`);
        this.listeners[listenerName] = handler;
        return handler;
      });
  }

  removeListener(listenerName: string): void {
    if (this.listeners[listenerName]) {
      this.listeners[listenerName]?.remove();
      this.listeners[listenerName] = null;
      console.log(`Listener removed for ${listenerName}`);
    }
  }

  async checkQuality() {
    const status = await this.getStatus();
    if (!status.connected) {
      console.log('Sin conexión a Internet');
      return 'DISCONNECTED';
    }

    const start = performance.now();
    try {
      await fetch('https://www.google.com', { method: 'HEAD', mode: 'no-cors' });
      const latency = performance.now() - start;

      console.log(`Latencia: ${latency.toFixed(2)} ms`);

      if (latency < 100) {
        return 'GOOD';
      } else if (latency < 300) {
        return 'REGULAR';
      } else {
        return 'BAD';
      }
    } catch (error) {
      console.error('Error al medir la conexión:', error);
      return 'INNESTABLE';
    }
  }

  startMonitoring() {
    const intervalId = setInterval(() => {
      this
        .checkQuality()
        .then((status) => {
          this.qualityStatus.next(status);
        });
    }, 10000);
  }

  subscribeQualityStatus(observer: (status: string) => void) {
    return this.qualityStatus$.subscribe(observer);
  }
}
