import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './course-info-component.html'
})
export class CourseInfoComponent implements OnInit {

    courseId: number;

    constructor(private activateRoute: ActivatedRoute) {};

    ngOnInit(): void {
        this.courseId = Number(this.activateRoute.snapshot.paramMap.get('id'));
    }

}