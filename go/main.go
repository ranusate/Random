package main

import (
	"fmt"
	"net/http"
	"time"
)

func greet(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello World! %s", time.April)
}

func hello(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Hello")

}

func main() {
	http.HandleFunc("/", greet)
	http.HandleFunc("/hello", hello)
	http.ListenAndServe(":8080", nil)
}
