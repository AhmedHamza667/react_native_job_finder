import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from 'react-native'
import { Stack, useRouter, useSearchParams } from 'expo-router'
import { useCallback, useState } from 'react'
import { useRoute } from '@react-navigation/native';

import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from '../../components'
import { COLORS, icons, SIZES } from '../../constants'
import useFetch from '../../hook/useFetch'

function JobDetils() {
    const router = useRouter();
    const route = useRoute();
    const params = route.params;

    const { data, isLoading, error, refetch } = useFetch(
        'job-details', {
        job_id: params.id
    })

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen
          options={{
            headerStyle: { background: COLORS.lightWhite },
            headerShadowVisible: false,
            headerBackVisible: false,
            headerLeft: () => (
                <ScreenHeaderBtn 
                iconUrl={icons.left}
                dimension="60%"
                handlePress={() => router.back()}
                /> 
            )

          }}>
            
        </Stack.Screen>
    </SafeAreaView>
  )
}

export default JobDetils