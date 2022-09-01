import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-info-component.html'
})
export class CourseInfoComponent implements OnInit {

    course: Course;

    constructor(private activateRoute: ActivatedRoute, private courseService: CourseService) {};

    ngOnInit(): void {
        const idCourse = Number(this.activateRoute.snapshot.paramMap.get('id'));
        this.courseService.retrieveById(idCourse).subscribe({
            next: course => {
                this.course = course;
            },
            error: err => {
                console.log('Error', err);
            }
        });
    }

    save() : void {
        this.courseService.saveOrUpdate(this.course).subscribe({
            next: course => {
                this.course = course;
            },
            error: err => {
                console.log('Error', err);
            }
        });
    }

}