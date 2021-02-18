platform :ios do

  desc "iOS: Create App on apple store"
  lane :create do
    produce(
      username: "nataci@natahouse.com",
      app_identifier: "com.natahouse.dev",
      app_name: "Nata House",
      app_version: "0.0.1",
      sku: "com.natahouse.dev",
			language: 'en-US',
			enable_services: {
				in_app_purchase: "off"
			}
    )
    deliver
  end

  desc 'iOS: Fetch certificates and provisioning profiles.'
  lane :certificates do
    update_code_signing_settings(
      use_automatic_signing: false,
      path: "./ios/NataHouse.xcodeproj"
    )
    match(type: 'development')
    match(type: 'appstore')
  end

  desc "iOS: Build the Stagging app version"
  lane :staging do
    match(
      readonly: is_ci,
      keychain_name:  is_ci? ? "actiontest_keychain" : nil,
      keychain_password: is_ci? ? "natahouse" : nil
    )
    gym(scheme: "Staging")
    pilot(
      username: "nataci@natahouse.com",
      distribute_external: false,
      notify_external_testers: false,
      apple_id: "1533987349",
      skip_waiting_for_build_processing: true
    )
  end

  desc "iOS: Build the Beta app version"
  lane :beta do
    match(
      readonly: is_ci,
      keychain_name:  is_ci? ? "actiontest_keychain" : nil,
      keychain_password: is_ci? ? "natahouse" : nil
    )
    gym(scheme: "Beta")
    pilot(
      username: "nataci@natahouse.com",
      distribute_external: true,
      notify_external_testers: true,
      apple_id: "1533987349",
      skip_waiting_for_build_processing: true
    )
	end

	desc "iOS: Build the Release app version"
  lane :release do
    match(
      readonly: is_ci,
      keychain_name:  is_ci? ? "actiontest_keychain" : nil,
      keychain_password: is_ci? ? "natahouse" : nil
    )
    gym()
    deliver()
  end
end
