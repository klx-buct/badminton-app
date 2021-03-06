import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from 'src/app/modules/common/data/response';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  constructor(
    private http: HttpClient
  ) { }

  joinMatch(uid: number): Observable<Response> {
    return this.http.get<Response>(`api/match/userMatch?uid=${uid}`);
  }

  getUserMatch(uid: number, matchId: number): Observable<Response> {
    return this.http.get<Response>(`api/match/arrange?uid=${uid}&matchId=${matchId}`);
  }

  getMatch(matchId: number):Observable<Response> {
    return this.http.get<Response>(`api/match/detail?id=${matchId}`);
  }

  against(matchId: number, uid: number): Observable<Response> {
    return this.http.get<Response>(`api/match/against?matchId=${matchId}&uid=${uid}`);
  }

  getPeopleList(teamId: number): Observable<Response> {
    return this.http.get<Response>(`api/match/peopleList?teamId=${teamId}`);
  }

  getMatchType(matchId: number): Observable<Response> {
    return this.http.get<Response>(`api/match/getMatchType?matchId=${matchId}`);
  }

  teamAgainst(params): Observable<Response> {

    return this.http.post<Response>("api/match/teamAgainst", params);
  }
}
