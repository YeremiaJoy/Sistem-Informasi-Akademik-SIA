package main

import (
	"fmt"
	"log"
	"net/http"

	"example.com/sia/router"
)

func main() {
	r := router.Router()
	fmt.Println("Server dijalankan pada port 3005.... =D Have Funn")

	log.Fatal(http.ListenAndServe(":3005", r))
}
