import React, { useState, useEffect } from "react";
import { SignInContent } from "../signin/SignInContent";
import { handleSignInAttempt } from "../../controllers/handleSignInAttempt";

export function SignInModal(props) {
	const onSignIn = props.onSignIn;
	const [errorMessage, setErrorMessage] = useState("");

	return (
		<>
			<button
				type="submit"
				className="btn btn-info"
				data-bs-toggle="modal"
				data-bs-target="#signInModal">
				Sign In
			</button>
			<form
				onSubmit={handleSubmit}
				className="modal fade"
				id="signInModal"
				tabIndex="-1"
				aria-labelledby="signInModalLabel"
				aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h1
								className="modal-title fs-5"
								id="signInModalLabel">
								Sign In Modal
							</h1>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<SignInContent errorMessage={errorMessage} />
						</div>
						<div className="modal-footer">
							<button
								id="signInCloseButton"
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal">
								Close
							</button>
							<button
								id="signInSubmitButton"
								type="submit"
								className="btn btn-primary">
								Sign In
							</button>
						</div>
					</div>
				</div>
			</form>
		</>
	);

	function handleSubmit(event) {
		handleSignInAttempt(event, setErrorMessage, onSignIn);
	}
}
