package router

import (
	"example.com/sia/controller"

	"github.com/gorilla/mux"
)

func Router() *mux.Router {
	router := mux.NewRouter()

	router.HandleFunc("api/student", controller.GetAllStudent).Methods("GET", "OPTIONS")
	router.HandleFunc("api/student/{id}", controller.GetStudent).Methods("GET", "OPTIONS")
	router.HandleFunc("api/student", controller.AddStudent).Methods("POST", "OPTIONS")
	router.HandleFunc("api/student{id}", controller.UpdateStudent).Methods("PUT", "OPTIONS")
	router.HandleFunc("api/student/{id}", controller.DeleteStudent).Methods("DELETE", "OPTIONS")

	router.HandleFunc("api/major", controller.GetAllMajor).Methods("GET", "OPTIONS")
	router.HandleFunc("api/major/{id}", controller.GetMajor).Methods("GET", "OPTIONS")
	router.HandleFunc("api/major", controller.AddMajor).Methods("POST", "OPTIONS")
	router.HandleFunc("api/major{id}", controller.UpdateMajor).Methods("PUT", "OPTIONS")
	router.HandleFunc("api/major/{id}", controller.DeleteMajor).Methods("DELETE", "OPTIONS")

	return router
}
