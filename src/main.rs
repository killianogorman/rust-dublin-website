use reqwest::Client;
use serde::{Deserialize, Serialize};
use serde_json::json;
use std::{fs, path::Path};

#[derive(Serialize, Deserialize, Debug)]
struct Address {
    #[serde(rename = "isProfanity")]
    is_profanity: bool,
    score: f64,
}
#[tokio::main]
async fn main() {
    let args: Vec<String> = std::env::args().collect();
    println!("{}", args.join("\n Newline: \n "));

    let current_dir = std::env::current_dir().unwrap();
    println!("{}", current_dir.display());
    for filename in &args[1..] {
        let p = format!("{}/{}", current_dir.display(), filename);
        println!("{}", p);
        let path = Path::new(&p);
        let abs_path = fs::canonicalize(&path).unwrap();
        println!("Checking file: {:?}", abs_path);

        if path.is_file() {
            let content = fs::read_to_string(&path).unwrap();
            println!("{content}");
            let char_chunks = split_into_chunks(&content, 22);

            for chunk in char_chunks {
                let contains_profanity = check_profanity(&chunk).await;
                if contains_profanity {
                    println!("Profanity found in file: {:?}, chunk: {:?}", path, chunk);
                    std::process::exit(1);
                }
            }
        }
    }
}
fn split_into_chunks(text: &String, chunk_size: usize) -> Vec<String> {
    text.split_whitespace()
        .collect::<Vec<&str>>()
        .chunks(chunk_size)
        .map(|chunk| chunk.join(" "))
        .collect()
}
async fn check_profanity(text: &String) -> bool {
    let client = Client::new();
    let res = client
        .post("https://vector.profanity.dev")
        .json(&json!({"message": text}))
        .send()
        .await
        .unwrap()
        .json::<Address>()
        .await;
    res.unwrap().is_profanity
}
