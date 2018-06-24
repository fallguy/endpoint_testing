/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

import React, { Component } from 'react';
import { Auth, I18n, Logger } from 'aws-amplify';

import {AuthPiece,AmplifyTheme} from 'aws-amplify-react';
import {
    FormSection,
    SectionHeader,
    SectionBody,
    SectionFooter,
    InputRow,
    ActionRow,
    MessageRow,
    Button,
    Space,
    Link
} from 'aws-amplify-react';

const logger = new Logger('ConfirmSignUp');

export default class ConfirmSignUp extends AuthPiece {
    constructor(props) {
        super(props);

        this._validAuthStates = ['confirmSignUp'];
        this.confirm = this.confirm.bind(this);
        this.resend = this.resend.bind(this);
    }

    confirm() {
        const username = this.usernameFromAuthData() || this.inputs.username;
        const { code } = this.inputs;
        Auth.confirmSignUp(username, code)
            .then(function(data){

                console.log(data)
               this.changeState();

            }) 
            .catch(err => this.error(err));
            function changeState() {
                // This works because arrow funcs adopt the this binding of the enclosing scope.
                this.changeState('signedUp')
            };
    }
    

    resend() {
        const username = this.usernameFromAuthData() || this.inputs.username;
        Auth.resendSignUp(username)
            .then(() => logger.debug('code resent'))
            .catch(err => this.error(err));
    }

    showComponent(theme) {
        const { hide, authState } = this.props;
        const username = this.usernameFromAuthData();
   
        if ('confirmSignUp' !== authState) { return null; }

        return (
            <FormSection theme={theme}>
                <SectionHeader theme={theme}>
                    {I18n.get('Confirm')} {I18n.get('Sign Up')}
                </SectionHeader>
                <SectionBody theme={theme}>
                    { username? <MessageRow>{username}</MessageRow>
                            : <InputRow
                                placeholder={I18n.get('Username')}
                                theme={theme}
                                key="username"
                                name="username"
                                onChange={this.handleInputChange}
                            />
                    }
                    <InputRow
                        autoFocus
                        placeholder={I18n.get('Code')}
                        theme={theme}
                        key="code"
                        name="code"
                        autoComplete="off"
                        onChange={this.handleInputChange}
                    />
                    <ActionRow theme={theme}>
                        <Button theme={theme} onClick={this.confirm}>
                            {I18n.get('Confirm')}
                        </Button>
                        <Space theme={theme} />
                        <Button theme={theme} onClick={this.resend}>
                            {I18n.get('Resend Code')}
                        </Button>
                    </ActionRow>
                </SectionBody>
                <SectionFooter theme={theme}>
                    <Link theme={theme} onClick={() => this.changeState('signIn')}>
                        {I18n.get('Back to Sign In')}
                    </Link>
                </SectionFooter>
            </FormSection>
        )
    }
}