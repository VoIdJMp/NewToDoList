export class MainService {

  taskArray: any[] = [];

  getObj(desc: string, std: any, stt: any) {
    return { description: desc, start_date: std, start_time: stt };
  }
}
