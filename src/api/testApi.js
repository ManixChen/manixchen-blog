import httpInstance from "@/utils/http";

export function testAPI() {
  
  return httpInstance({
    url: "api/weather/city/101030100",
  });
}
