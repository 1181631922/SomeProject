package com.fanyafeng.react.rnfragment;

import android.content.Context;
import android.net.Uri;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.KeyEvent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.facebook.react.BuildConfig;
import com.facebook.react.LifecycleState;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.shell.MainReactPackage;
import com.fanyafeng.react.R;
import com.fanyafeng.react.androidreactpackage.AppReactPackage;

/**
 * A simple {@link Fragment} subclass.
 * Activities that contain this fragment must implement the
 * to handle interaction events.
 * Use the {@link ReactNativeFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class ReactNativeFragment extends Fragment implements DefaultHardwareBackBtnHandler {
    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";
    private ReactRootView reactRootView;
    private ReactInstanceManager reactInstanceManager;

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;

    public ReactNativeFragment() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @param param1 Parameter 1.
     * @param param2 Parameter 2.
     * @return A new instance of fragment ReactNativeFragment.
     */
    // TODO: Rename and change types and number of parameters
    public static ReactNativeFragment newInstance(String param1, String param2) {
        ReactNativeFragment fragment = new ReactNativeFragment();
        Bundle args = new Bundle();
        args.putString(ARG_PARAM1, param1);
        args.putString(ARG_PARAM2, param2);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            mParam1 = getArguments().getString(ARG_PARAM1);
            mParam2 = getArguments().getString(ARG_PARAM2);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_react_native, container, false);
    }

    @Override
    public void onActivityCreated(Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);
        initView();
        initData();
    }

    private void initView() {
        reactRootView = (ReactRootView) getActivity().findViewById(R.id.test_js);
    }

    private void initData() {
        reactInstanceManager = ReactInstanceManager.builder()
                .setApplication(getActivity().getApplication())
                .setBundleAssetName("index.android.bundle")
                .setJSMainModuleName("index.android")
                .addPackage(new MainReactPackage())
                .addPackage(new AppReactPackage())
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();
        reactRootView.startReactApplication(reactInstanceManager, "SomeProject", null);
    }

    @Override
    public void invokeDefaultOnBackPressed() {

    }
}
