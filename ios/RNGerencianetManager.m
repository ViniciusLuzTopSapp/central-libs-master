//
//  RNGerencianetManager.m
//  TopCliente
//
//  Created by João Victor Dias Ramos on 19/05/22.
//  Copyright © 2022 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "GNApiSdk.h"
#import <React/RCTLog.h>
#import "GNCreditCard.h"
#import "GNPaymentToken.h"
#import "GNConfig.h"
#import "GNError.h"
#import "GNApiEndpoints.h"
#import "RNGerencianetModule.h"
#import <React/RCTBridgeModule.h>
#import <React/RCTBridge.h>
#import <React/RCTEventDispatcher.h>

@implementation RNGerencianet

RCT_EXPORT_MODULE();

// Example method
// See // https://reactnative.dev/docs/native-modules-ios

RCT_EXPORT_METHOD(generateHash: (NSString *)accountId :(BOOL *)approvalMode : (NSString *)number :(NSString *)brand :(NSString *)ccv :(NSString *)month :(NSString *)year :(RCTResponseSenderBlock)callback)
{
  GNConfig *gnConfig = [[GNConfig alloc] initWithAccountCode:accountId sandbox:approvalMode];
  GNApiEndpoints *gnApi = [[GNApiEndpoints alloc] initWithConfig:gnConfig];

  GNCreditCard *creditCard = [[GNCreditCard alloc] init];
      creditCard.number = number;
      creditCard.brand = brand;
      creditCard.expirationMonth = month;
      creditCard.expirationYear = year;
      creditCard.cvv = ccv;

    [gnApi paymentTokenForCreditCard:creditCard]
    .then(^(GNPaymentToken *paymentToken){
    NSLog(@"%@", paymentToken.token);
    callback(@[paymentToken.token]);
    })
    .catch(^(GNError *error){
    NSLog(@"An error occurred: %@", error.message);
    callback(@[error.message]);
    });
}

@end
