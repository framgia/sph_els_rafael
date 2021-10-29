import http from "../http-common";
import IQuizData from "../types/quiz.type";

class QuizDataService {
  getAll() {
    return http.get("/quizzes");
  }

  get(id: string) {
    return http.get(`/quizzes/${id}`);
  }

  create(data: IQuizData) {
    return http.post("/quizzes", data,{
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      }
    });
  }

  update(data: IQuizData, id: any) {
    return http.put(`/quizzes/${id}`, data);
  }

  delete(id: any) {
    return http.delete(`/quizzes/${id}`);
  }

  deleteAll() {
    return http.delete(`/quizzes`);
  }

  findByTitle(title: string) {
    return http.get(`/quizzes?title=${title}`);
  }
}

export default new QuizDataService();
