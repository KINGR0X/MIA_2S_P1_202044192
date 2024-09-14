import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private apiUrl = "http://localhost:5100/analizar"; // Cambia esto a la URL de tu API

  constructor(private http: HttpClient) {}

  postEntrada(entrada: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { cmd: entrada });
  }
}
