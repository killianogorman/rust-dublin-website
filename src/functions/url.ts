export function makeYTurl(url:string){
   let parts =  url.split('https://youtu.be/')
   let final_url = `https://www.youtube.com/embed/${parts[1]}`
   return final_url
}