package main

import (
	"log"
	"net/http"
)

func sayHelloName(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	http.ServeFile(w, r, "./")
}
func main() {
	http.HandleFunc("/", sayHelloName) // set router
	err := http.ListenAndServe(":9090", nil)
	if err != nil {
		log.Fatal("ListenAndServer: ", err)
	}
}
