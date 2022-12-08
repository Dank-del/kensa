import { Fragment } from "react";

export const Loader = () => {
    return (
        <Fragment>
            <div style={{
                display: "flex",
                flexdirection: "row",
            }} class="text-center">
                <div style={{
                    width: "5rem",
                    height: "5rem",
                    color: "#0c6efd"
                }} class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <img src="logo-no-background.png" width='80px' alt="" />
            </div>
        </Fragment>
    );
}

export const LoaderCard = () => {
    return (
        <Fragment>
            <div class="card" aria-hidden="true">
                <div class="card-body">
                    <h5 class="card-title placeholder-glow">
                        <span class="placeholder col-6"></span>
                    </h5>
                    <p class="card-text placeholder-glow">
                        <span class="placeholder col-7"></span>
                        <span class="placeholder col-4"></span>
                        <span class="placeholder col-4"></span>
                        <span class="placeholder col-6"></span>
                        <span class="placeholder col-8"></span>
                    </p>
                    <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
                </div>
            </div>
        </Fragment>
    );
}