import { HomeService } from "@home/infrastructure";
import { firstValueFrom } from "rxjs";

export function getUserDetail(homeService:HomeService) {
  console.log('initialize')
  return () =>firstValueFrom(homeService.getUserDetail())
}
